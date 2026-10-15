import { Router } from 'express';
import {
  getPaymentById,
  getAllPayments,
  createPayment,
  updatePayment,
  deletePayment,
  uploadInvoice,
} from '../controllers/paymentController.js';
import { requireAdmin } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { invoiceUpload } from '../middleware/upload.js';

const router = Router();

// ── Public ──────────────────────────────────────────────────────────────────
router.get('/:paymentId', asyncHandler(getPaymentById));

// ── Admin ───────────────────────────────────────────────────────────────────
router.get('/', requireAdmin, asyncHandler(getAllPayments));
router.post('/', requireAdmin, asyncHandler(createPayment));
router.put('/:id', requireAdmin, asyncHandler(updatePayment));
router.delete('/:id', requireAdmin, asyncHandler(deletePayment));

router.post(
  '/:id/invoice',
  requireAdmin,
  (req, res, next) => {
    invoiceUpload.single('invoice')(req, res, (err) => {
      if (err) return res.status(400).json({ message: err.message || 'Upload failed.' });
      next();
    });
  },
  asyncHandler(uploadInvoice)
);

export default router;
