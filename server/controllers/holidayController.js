import { HolidayPackage } from '../models/HolidayPackage.js';

export async function listActivePackages(req, res) {
  const packages = await HolidayPackage.find({ active: true }).sort({ createdAt: -1 });
  res.json({ packages });
}

export async function listAllPackages(req, res) {
  const packages = await HolidayPackage.find().sort({ createdAt: -1 });
  res.json({ packages });
}

export async function getPackage(req, res) {
  const pkg = await HolidayPackage.findById(req.params.id);
  if (!pkg) {
    return res.status(404).json({ message: 'Holiday package not found' });
  }
  res.json({ package: pkg });
}

export async function createPackage(req, res) {
  const { title, destination, duration, price, image, description, inclusions } = req.body;

  if (!title || !destination || !duration || !price) {
    return res.status(400).json({ message: 'title, destination, duration and price are required' });
  }

  const pkg = await HolidayPackage.create({
    title,
    destination,
    duration,
    price,
    image,
    description,
    inclusions: inclusions || [],
  });

  res.status(201).json({ package: pkg });
}

export async function updatePackage(req, res) {
  const pkg = await HolidayPackage.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' });
  if (!pkg) {
    return res.status(404).json({ message: 'Holiday package not found' });
  }
  res.json({ package: pkg });
}

export async function deletePackage(req, res) {
  const pkg = await HolidayPackage.findByIdAndDelete(req.params.id);
  if (!pkg) {
    return res.status(404).json({ message: 'Holiday package not found' });
  }
  res.json({ success: true });
}
