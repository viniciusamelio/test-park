import express from 'express';
import UserController from '../controllers/user/userController';

const router = express.Router();
const userController = new UserController();

router.get('/user',userController.listUsers);
router.get('/user/email/:email',userController.findUserByEmail);
router.get('/user/:id',userController.findUserById);
router.post('/user',userController.createUser);
router.put('/user',userController.updateUser);
router.delete('/user/:id',userController.removeUser);

export default router;