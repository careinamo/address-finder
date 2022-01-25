import { Router } from 'express';
import addressController from '../controllers/address.controller';
import { tokenValidation } from '../libs/verifyToken';

const router = Router();

router.get('/getAddress', tokenValidation, addressController.getAddress);

export default router;
