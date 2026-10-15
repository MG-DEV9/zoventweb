import jwt from 'jsonwebtoken';
import { Admin } from '../models/Admin.js';
import { Customer } from '../models/Customer.js';

export async function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'username and password are required' });
  }

  const admin = await Admin.findOne({ username: username.trim().toLowerCase() });
  if (!admin) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const valid = await admin.verifyPassword(password);
  if (!valid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: admin._id.toString(), username: admin.username }, process.env.JWT_SECRET, {
    expiresIn: '12h',
  });

  res.json({ token, admin: { username: admin.username } });
}

export async function listCustomers(req, res) {
  const customers = await Customer.find().sort({ createdAt: -1 });
  res.json({ customers });
}

export async function updateCustomerStatus(req, res) {
  const { id } = req.params;
  const { status } = req.body;

  if (!['NEW', 'CONTACTED', 'CONVERTED', 'CLOSED'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status value' });
  }

  const customer = await Customer.findByIdAndUpdate(id, { status }, { returnDocument: 'after' });
  if (!customer) {
    return res.status(404).json({ message: 'Customer not found' });
  }

  res.json({ customer });
}
