import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const uploadDir = path.join(rootDir, 'uploads', 'invoices');
fs.mkdirSync(uploadDir, { recursive: true });

const ALLOWED = {
  'application/pdf': '.pdf',
  'image/png': '.png',
  'image/jpeg': '.jpg',
};

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = ALLOWED[file.mimetype] || path.extname(file.originalname) || '';
    const paymentId = (req.params.id || 'invoice').replace(/[^A-Za-z0-9-]/g, '');
    cb(null, `${paymentId}-${Date.now()}${ext}`);
  },
});

export const invoiceUpload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (!ALLOWED[file.mimetype]) {
      return cb(new Error('Only PDF, PNG or JPG invoices are allowed.'));
    }
    cb(null, true);
  },
});
