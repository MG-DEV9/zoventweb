import { getRazorpayInstance } from '../config/razorpay.js';
import { Payment } from '../models/Payment.js';
import { Transaction } from '../models/Transaction.js';
import { Customer } from '../models/Customer.js';
import { verifyRazorpaySignature } from '../utils/razorpaySignature.js';
import { syncInstallments } from '../utils/installmentSync.js';

export async function createOrder(req, res) {
  const { paymentId, amount, gstApplied, clientName, clientEmail, clientPhone, clientMessage, installmentIdx } =
    req.body;

  const amountPaise = Math.round(Number(amount) * 100);
  if (!amountPaise || amountPaise < 100) {
    return res.status(400).json({ message: 'Amount must be at least ₹1.' });
  }

  const payment = await Payment.findOne({ paymentId: (paymentId || '').trim().toUpperCase() });
  if (!payment || payment.status === 'Paid') {
    return res.status(400).json({ message: 'Invalid or already-paid reference.' });
  }

  let idx = null;
  if (installmentIdx !== undefined && installmentIdx !== null && installmentIdx !== '') {
    idx = parseInt(installmentIdx, 10);
    if (Number.isNaN(idx) || idx < 0 || idx >= payment.installments.length) {
      return res.status(400).json({ message: 'Invalid installment index.' });
    }
    if (payment.installments[idx].status === 'Paid') {
      return res.status(400).json({ message: 'This installment has already been paid.' });
    }
  }

  const razorpay = getRazorpayInstance();
  const order = await razorpay.orders.create({
    amount: amountPaise,
    currency: 'INR',
    receipt: `rcpt_${payment.paymentId}_${Date.now()}`,
    notes: {
      paymentId: payment.paymentId,
      clientName,
      gstApplied: String(Boolean(gstApplied)),
      installmentIdx: idx !== null ? String(idx) : '',
    },
  });

  let customer;
  if (clientEmail) {
    customer = await Customer.findOneAndUpdate(
      { email: clientEmail.toLowerCase(), phone: clientPhone },
      {
        fullName: clientName,
        email: clientEmail,
        phone: clientPhone,
        notes: clientMessage,
        lastPaymentId: payment.paymentId,
        source: 'PAYMENT',
      },
      { returnDocument: 'after', upsert: true, setDefaultsOnInsert: true }
    );
  }

  await Transaction.create({
    customer: customer?._id,
    paymentId: payment.paymentId,
    orderId: order.id,
    amount: Number(amount),
    baseAmount: payment.totalAmount || payment.baseAmount,
    gstApplied: Boolean(gstApplied),
    clientName,
    clientEmail,
    clientPhone,
    clientMessage,
    installmentIdx: idx,
    status: 'created',
  });

  res.status(201).json({ orderId: order.id, amount: order.amount, currency: order.currency });
}

export async function verifyPayment(req, res) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, paymentId, amount, installmentIdx } = req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ message: 'Missing required payment fields.' });
  }

  const signatureValid = verifyRazorpaySignature({
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
    signature: razorpay_signature,
    secret: process.env.RAZORPAY_KEY_SECRET,
  });

  if (!signatureValid) {
    await Transaction.findOneAndUpdate({ orderId: razorpay_order_id }, { status: 'failed' });
    return res.status(400).json({ message: 'Payment verification failed: signature mismatch.' });
  }

  await Transaction.findOneAndUpdate(
    { orderId: razorpay_order_id },
    { status: 'paid', razorpayPaymentId: razorpay_payment_id }
  );

  const payment = await Payment.findOne({ paymentId: (paymentId || '').trim().toUpperCase() });
  if (!payment) {
    return res.status(404).json({ message: 'Payment record not found.' });
  }

  const idx =
    installmentIdx !== undefined && installmentIdx !== null && installmentIdx !== '' ? parseInt(installmentIdx, 10) : null;

  if (idx !== null && !Number.isNaN(idx) && payment.installments?.[idx]) {
    payment.installments[idx].status = 'Paid';
    payment.installments[idx].paidOn = new Date().toISOString().slice(0, 10);
    payment.installments[idx].razorpayPaymentId = razorpay_payment_id;

    const synced = syncInstallments(payment.installments);
    if (synced) {
      payment.status = synced.status;
      payment.paidAmount = synced.paidAmount;
    }
  } else {
    payment.status = 'Paid';
    payment.paidAmount = Number(amount);
  }

  payment.razorpayPaymentId = razorpay_payment_id;
  payment.lastPaidAt = new Date();
  await payment.save();

  res.json({ message: 'Payment verified successfully.', razorpay_payment_id });
}
