import { Customer } from '../models/Customer.js';

export async function submitEnquiry(req, res) {
  const { fullName, company, email, phone, eventType, expectedDate, estimatedDelegates, message } = req.body;

  if (!fullName || !email || !phone || !message) {
    return res.status(400).json({ message: 'fullName, email, phone and message are required' });
  }

  const customer = await Customer.create({
    fullName,
    company,
    email,
    phone,
    eventType,
    expectedDate,
    estimatedDelegates,
    message,
    source: 'CONTACT_FORM',
  });

  res.status(201).json({ customer });
}
