import { Router } from 'express';
import { submitEnquiry } from '../controllers/contactController.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const router = Router();

router.post('/', asyncHandler(submitEnquiry));

export default router;
