import express from 'express';
import StayController from '../controllers/stay/stayController';

const router = express.Router();
const stayController = new StayController();

router.post('/stay', stayController.createStay);

export default router;