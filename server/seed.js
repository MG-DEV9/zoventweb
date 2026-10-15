import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import { Payment } from './models/Payment.js';
import { HolidayPackage } from './models/HolidayPackage.js';
import { Admin } from './models/Admin.js';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
dotenv.config({ path: path.join(rootDir, '.env.local') });
dotenv.config({ path: path.join(rootDir, '.env') });

const RESET = process.argv.includes('--reset');

async function seed() {
  await connectDB();

  if (RESET) {
    // Destructive: wipes every payment record, including anything created
    // through the admin UI, not just the two demo ones below. Only runs
    // when explicitly requested with `node server/seed.js --reset`.
    await Payment.collection.drop().catch(() => {});
    console.log('[seed] --reset: dropped the payments collection');
  }

  const payments = [
    {
      paymentId: 'ZOV-MICE-0001',
      clientName: 'Acme India Pvt. Ltd.',
      clientEmail: 'events@acmeindia.com',
      clientPhone: '9876543210',
      service: 'MICE Events',
      description: 'Annual Leadership Summit & Gala — Gurugram, 400 delegates',
      totalAmount: 850000,
      baseAmount: 850000,
      dueDate: '2026-11-15',
      status: 'Pending',
      gstApplicable: true,
      gstRate: 18,
      paidAmount: 0,
      installments: [
        { label: 'Advance (40%)', amount: 340000, dueDate: '2026-10-25', status: 'Pending' },
        { label: 'Balance (60%)', amount: 510000, dueDate: '2026-11-10', status: 'Pending' },
      ],
    },
    {
      paymentId: 'ZOV-OFST-0002',
      clientName: 'Meridian Technologies',
      clientEmail: 'hr@meridiantech.com',
      clientPhone: '9876501234',
      service: 'Offsites & Team Building',
      description: 'Senior Management Offsite — Udaipur Palace, 60 delegates',
      totalAmount: 620000,
      baseAmount: 620000,
      dueDate: '2026-11-20',
      status: 'Pending',
      gstApplicable: true,
      gstRate: 18,
      paidAmount: 0,
      installments: [],
    },
  ];

  for (const p of payments) {
    await Payment.findOneAndUpdate({ paymentId: p.paymentId }, p, { upsert: true, returnDocument: 'after' });
  }
  console.log(`[seed] Upserted ${payments.length} demo payments`);

  const packages = [
    {
      title: 'Udaipur Heritage Retreat',
      destination: 'Udaipur, Rajasthan',
      duration: '4 Days / 3 Nights',
      price: 45000,
      description: 'Palace-side luxury retreat with private lake cruise and heritage dining.',
      inclusions: ['5-star accommodation', 'Private lake cruise', 'Airport transfers', 'Daily breakfast'],
    },
    {
      title: 'Goa Corporate Offsite',
      destination: 'Goa',
      duration: '3 Days / 2 Nights',
      price: 32000,
      description: 'Beachside offsite with team-building activities and sunset networking.',
      inclusions: ['Beach resort stay', 'Team-building sessions', 'Welcome dinner', 'Airport transfers'],
    },
  ];

  for (const pkg of packages) {
    await HolidayPackage.findOneAndUpdate({ title: pkg.title }, pkg, { upsert: true, returnDocument: 'after' });
  }
  console.log(`[seed] Upserted ${packages.length} holiday packages`);

  const adminUsername = (process.env.ADMIN_SEED_USERNAME || 'admin').toLowerCase();
  const adminPassword = process.env.ADMIN_SEED_PASSWORD || 'ChangeMe123!';
  const passwordHash = await Admin.hashPassword(adminPassword);
  await Admin.findOneAndUpdate(
    { username: adminUsername },
    { username: adminUsername, passwordHash },
    { upsert: true, returnDocument: 'after' }
  );
  console.log(`[seed] Admin user ready: ${adminUsername} / ${adminPassword}`);

  await mongoose.disconnect();
  console.log('[seed] Done.');
}

seed().catch((err) => {
  console.error('[seed] Failed:', err);
  process.exit(1);
});
