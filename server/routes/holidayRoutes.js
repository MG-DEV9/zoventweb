import { Router } from 'express';
import {
  listActivePackages,
  listAllPackages,
  getPackage,
  createPackage,
  updatePackage,
  deletePackage,
} from '../controllers/holidayController.js';
import { requireAdmin } from '../middleware/auth.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const router = Router();

router.get('/', asyncHandler(listActivePackages));
router.get('/admin', requireAdmin, asyncHandler(listAllPackages));
router.get('/:id', asyncHandler(getPackage));
router.post('/', requireAdmin, asyncHandler(createPackage));
router.put('/:id', requireAdmin, asyncHandler(updatePackage));
router.delete('/:id', requireAdmin, asyncHandler(deletePackage));

export default router;
