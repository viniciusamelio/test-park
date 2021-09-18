import express, { Request, Response } from 'express';

import { PrismaClient } from '@prisma/client'
import UserController from './presentation/controllers/user/userController';
import MongooseService from './external/mongoose/mongooseService';

const prisma = new PrismaClient()

const app = express();
app.use(express.json());

const userController = new UserController();
app.post('/user',userController.createUser);

app.get('/',(request,response)=>{
    const mongoService = new MongooseService();
    return response.json('ok')
});

app.get('/ping', async(request: Request, response: Response)=>{
    const teste = await prisma.user.findMany();
    return response.json({"ping":"pong", 'env' : teste});
});

app.listen(3000);