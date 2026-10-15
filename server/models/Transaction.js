import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    paymentId: { type: String, required: true, uppercase: true, trim: true, index: true },
    orderId: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    baseAmount: { type: Number, required: true },
    gstApplied: { type: Boolean, default: false },
    razorpayPaymentId: { type: String, sparse: true },
    status: { type: String, enum: ['created', 'paid', 'failed'], default: 'created' },
    clientName: { type: String },
    clientEmail: { type: String },
    clientPhone: { type: String },
    clientMessage: { type: String },
    installmentIdx: { type: Number, default: null },
  },
  { timestamps: true }
);

export const Transaction = mongoose.model('Transaction', transactionSchema);
