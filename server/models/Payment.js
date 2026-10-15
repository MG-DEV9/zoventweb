import mongoose from 'mongoose';

const installmentSchema = new mongoose.Schema(
  {
    label: { type: String, required: true, trim: true },
    amount: { type: Number, required: true, min: 0 },
    dueDate: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' },
    paidOn: { type: String },
    razorpayPaymentId: { type: String },
  },
  { _id: false }
);

const paymentSchema = new mongoose.Schema(
  {
    paymentId: { type: String, required: true, unique: true, uppercase: true, trim: true, index: true },
    clientName: { type: String, required: true, trim: true },
    clientEmail: { type: String, trim: true, default: '' },
    clientPhone: { type: String, trim: true, default: '' },
    service: { type: String, required: true },
    description: { type: String, required: true },

    totalAmount: { type: Number, required: true, min: 1 },
    baseAmount: { type: Number, default: 0 },
    paidAmount: { type: Number, default: 0 },

    installments: { type: [installmentSchema], default: [] },

    dueDate: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Partial', 'Paid'], default: 'Pending' },
    gstApplicable: { type: Boolean, default: false },
    gstRate: { type: Number, default: 18 },
    gatewayFeeApplicable: { type: Boolean, default: true },
    gatewayFeeRate: { type: Number, default: 2 },

    lastPaidAt: { type: Date },
    razorpayPaymentId: { type: String },
    invoiceUrl: { type: String },
    invoiceFileName: { type: String },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

paymentSchema.virtual('remainingAmount').get(function remainingAmount() {
  return Math.max(0, (this.totalAmount || 0) - (this.paidAmount || 0));
});

export const Payment = mongoose.model('Payment', paymentSchema);
