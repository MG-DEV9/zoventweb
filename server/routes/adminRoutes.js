import { Router } from 'express';
import { login, listCustomers, updateCustomerStatus } from '../controllers/adminController.js';
import { requireAdmin } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const router = Router();

router.post('/login', asyncHandler(login));
router.get('/customers', requireAdmin, asyncHandler(listCustomers));
router.patch('/customers/:id/status', requireAdmin, asyncHandler(updateCustomerStatus));

export default router;
