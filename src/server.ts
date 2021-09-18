import express, { Request, Response } from 'express';
import UserController from './presentation/controllers/user/userController';
import MongooseService from './external/mongoose/mongooseService';


const app = express();
app.use(express.json());

const userController = new UserController();
app.post('/user',userController.createUser);
app.put('/user',userController.updateUser);

app.get('/',(request,response)=>{
    const mongoService = new MongooseService();
    return response.json('ok')
});

app.get('/ping', async(request: Request, response: Response)=>{
    return response.json({"ping":"pong"});
});

app.listen(3000);