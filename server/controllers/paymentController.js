import { Payment } from '../models/Payment.js';

function idFilter(id) {
  return { paymentId: id.trim().toUpperCase() };
}

// ── Public — fetch by reference ID ─────────────────────────────────────────────
export async function getPaymentById(req, res) {
  const payment = await Payment.findOne(idFilter(req.params.paymentId));
  if (!payment) {
    return res.status(404).json({ message: 'Payment reference not found.' });
  }
  res.json(payment);
}

// ── Admin — list with optional filters ──────────────────────────────────────────
export async function getAllPayments(req, res) {
  const { status, service, search } = req.query;
  const filter = {};
  if (status) filter.status = status;
  if (service) filter.service = service;
  if (search) {
    filter.$or = [
      { paymentId: { $regex: search, $options: 'i' } },
      { clientName: { $regex: search, $options: 'i' } },
      { clientEmail: { $regex: search, $options: 'i' } },
    ];
  }
  const payments = await Payment.find(filter).sort({ createdAt: -1 });
  res.json(payments);
}

// ── Admin — create ────────────────────────────────────────────────────────────
export async function createPayment(req, res) {
  const paymentId = (req.body.paymentId || '').trim().toUpperCase();
  if (!paymentId) {
    return res.status(400).json({ message: 'Payment ID is required.' });
  }

  const exists = await Payment.findOne({ paymentId });
  if (exists) {
    return res.status(409).json({ message: 'Reference ID already exists.' });
  }

  const body = { ...req.body, paymentId };
  if (body.totalAmount) body.baseAmount = body.totalAmount;

  const payment = await Payment.create(body);
  res.status(201).json(payment);
}

// ── Admin — update ────────────────────────────────────────────────────────────
export async function updatePayment(req, res) {
  const body = { ...req.body };
  delete body.paymentId;
  if (body.totalAmount) body.baseAmount = body.totalAmount;

  const payment = await Payment.findOneAndUpdate(idFilter(req.params.id), body, {
    returnDocument: 'after',
    runValidators: true,
  });
  if (!payment) {
    return res.status(404).json({ message: 'Not found.' });
  }
  res.json(payment);
}

// ── Admin — delete ────────────────────────────────────────────────────────────
export async function deletePayment(req, res) {
  const payment = await Payment.findOne(idFilter(req.params.id));
  if (!payment) {
    return res.status(404).json({ message: 'Not found.' });
  }
  if (payment.status === 'Paid') {
    return res.status(400).json({ message: 'Cannot delete a paid record.' });
  }
  await payment.deleteOne();
  res.json({ message: 'Deleted.' });
}

// ── Admin — upload invoice file ──────────────────────────────────────────────
export async function uploadInvoice(req, res) {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }

  const payment = await Payment.findOneAndUpdate(
    idFilter(req.params.id),
    { invoiceUrl: `/uploads/invoices/${req.file.filename}`, invoiceFileName: req.file.originalname },
    { returnDocument: 'after' }
  );
  if (!payment) {
    return res.status(404).json({ message: 'Not found.' });
  }
  res.json(payment);
}
