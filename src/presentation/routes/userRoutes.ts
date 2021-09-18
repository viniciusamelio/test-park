import express from 'express';
import UserController from '../controllers/user/userController';

const router = express.Router();
const userController = new UserController();

router.get('/user',userController.listUsers);
router.post('/user',userController.createUser);
router.put('/user',userController.updateUser);

export default router;