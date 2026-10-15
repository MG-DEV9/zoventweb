import mongoose from 'mongoose';

const holidayPackageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    destination: { type: String, required: true },
    duration: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    description: { type: String },
    inclusions: { type: [String], default: [] },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const HolidayPackage = mongoose.model('HolidayPackage', holidayPackageSchema);
