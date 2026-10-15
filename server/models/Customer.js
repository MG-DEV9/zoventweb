import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    company: { type: String },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true },
    eventType: { type: String },
    expectedDate: { type: String },
    estimatedDelegates: { type: String },
    message: { type: String },
    notes: { type: String },
    lastPaymentId: { type: String },
    source: { type: String, enum: ['CONTACT_FORM', 'PAYMENT', 'ADMIN'], default: 'CONTACT_FORM' },
    status: { type: String, enum: ['NEW', 'CONTACTED', 'CONVERTED', 'CLOSED'], default: 'NEW' },
  },
  { timestamps: true }
);

export const Customer = mongoose.model('Customer', customerSchema);
