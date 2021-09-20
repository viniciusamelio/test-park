import express from 'express';
import PaymentController from '../controllers/payment/paymentController';

const router = express.Router();
const paymentController = new PaymentController();

router.post('/payment', paymentController.pay);

export default router;