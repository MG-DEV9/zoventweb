import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { connectDB } from './config/db.js';
import razorpayRoutes from './routes/razorpayRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import holidayRoutes from './routes/holidayRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
dotenv.config({ path: path.join(rootDir, '.env.local') });
dotenv.config({ path: path.join(rootDir, '.env') });

const app = express();

// Without CLIENT_URL set, CORS is wide open (fine for local dev). Once a
// frontend is deployed, set CLIENT_URL in the environment to lock requests
// down to that origin — localhost is always allowed on top of it for dev.
const clientUrl = process.env.CLIENT_URL;
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || !clientUrl) return callback(null, true);
      const allowed = origin === clientUrl || /^https?:\/\/localhost(:\d+)?$/.test(origin);
      callback(allowed ? null : new Error('Not allowed by CORS'), allowed);
    },
  })
);
app.use(express.json());

app.use('/uploads', express.static(path.join(rootDir, 'server', 'uploads')));

app.use('/api/', rateLimit({ windowMs: 15 * 60 * 1000, max: 300 }));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.use('/api/razorpay', razorpayRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/holidays', holidayRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/contact', contactRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Centralized error handler — routes wrap their async controllers in
// asyncHandler, which forwards rejected promises here instead of crashing.
app.use((err, req, res, next) => {
  console.error('[server] Unhandled error:', err);

  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors)
      .map((e) => e.message)
      .join(', ');
    return res.status(400).json({ message: messages });
  }
  if (err.code === 11000) {
    return res.status(409).json({ message: 'Duplicate entry.' });
  }

  // The Razorpay SDK throws a plain { statusCode, error: { description } }
  // object rather than an Error, so surface its message explicitly.
  if (err.error?.description) {
    return res.status(err.statusCode || 502).json({ message: `Razorpay: ${err.error.description}` });
  }

  res.status(err.status || 500).json({ message: err.message || 'Internal server error' });
});

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`[server] Zovent API listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('[server] Failed to start:', err.message);
    process.exit(1);
  });

export default app;
