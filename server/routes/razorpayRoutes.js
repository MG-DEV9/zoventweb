import { Router } from 'express';
import { createOrder, verifyPayment } from '../controllers/razorpayController.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const router = Router();

router.post('/create-order', asyncHandler(createOrder));
router.post('/verify', asyncHandler(verifyPayment));

export default router;
