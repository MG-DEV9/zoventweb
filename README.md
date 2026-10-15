## Zovent — Full Stack App

A Vite + React frontend with an Express + MongoDB backend (Razorpay payments with installments/GST, an admin payments dashboard, contact enquiries, holiday packages).

### Prerequisites

- Node.js 20+
- A MongoDB instance (local `mongod`, Docker, or MongoDB Atlas)
- A Razorpay test account (for the payment flow)

### Setup

1. Install dependencies:
   `npm install`

2. Copy `.env.example` to `.env.local` and fill in your values:
   - `MONGO_URI` — your MongoDB connection string
   - `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` — from your Razorpay dashboard (test mode)
   - `JWT_SECRET` — any long random string, used to sign admin session tokens
   - `ADMIN_SEED_USERNAME` / `ADMIN_SEED_PASSWORD` — credentials created by the seed script

3. Seed demo data (sample payments, holiday packages, and the admin user):
   `npm run seed`

   This is safe to re-run — it only upserts the two demo payment records by
   `paymentId`, so anything created through the admin UI is left alone. To
   wipe the entire `payments` collection and start clean, use
   `npm run seed:reset` instead (destructive — this will delete real
   admin-entered records too).

### Run

- Frontend only: `npm run dev` (Vite on port 3000)
- Backend only: `npm run server` (Express API on port 5000, or `PORT` from env)
- Both together: `npm run dev:all`
- Tests: `npm test` — a small suite covering the money-critical logic
  (Razorpay signature verification, installment status syncing, and the
  gateway-fee/GST math). See [Tests](#tests) below.

### Key flows

- `/payment` or `/payment/:paymentId` — look up a payment by reference ID (seeded demo: `ZOV-MICE-0001`, which has two installments, or `ZOV-OFST-0002`, a single lump sum) and pay via Razorpay Checkout, with an installment picker and a GST + gateway fee breakdown. The backend creates the Razorpay order and verifies the payment signature server-side before marking the invoice (or installment) paid.
- `/contact` — submits a proposal enquiry to the backend, stored as a `Customer` record.
- `/admin/login` — sign in with the seeded admin credentials to reach `/admin`, a payments dashboard: create/edit/delete records, define installment schedules, toggle GST, upload invoice files (PDF/PNG/JPG), mark paid, and copy a shareable payment link.

### Backend structure (`server/`)

```
server/
  server.js              Express app entry point (rate-limited, serves /uploads)
  config/db.js            MongoDB connection
  config/razorpay.js      Razorpay SDK client
  models/                 Payment (with installments + GST), Customer, Transaction, HolidayPackage, Admin
  controllers/            Business logic per domain
  routes/                 Route wiring, admin routes gated by JWT
  middleware/              auth.js (JWT check), upload.js (multer, invoice files), asyncHandler.js
  uploads/invoices/        Uploaded invoice files (gitignored)
  utils/                   Pure, unit-tested helpers (Razorpay signature check, installment sync)
  seed.js                 Seeds demo payments, holiday packages, and the admin user
```

### Tests

`npm test` runs Node's built-in test runner (`node --test`, no extra
dependencies) against the three pure modules where a silent regression would
actually cost money:

```
shared/paymentMath.js                 gateway fee + GST math (shared by the
                                       admin dashboard and the public payment
                                       page, so they can't drift apart)
server/utils/razorpaySignature.js     HMAC signature verification
server/utils/installmentSync.js       re-deriving status/paidAmount from an
                                       installments array
```

These are extracted as plain, side-effect-free functions (no Express req/res,
no Mongoose documents, no network calls) specifically so they can be tested
without a database or live Razorpay credentials.

