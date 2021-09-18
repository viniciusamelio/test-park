import express, { Request, Response } from 'express';
import userRoutes from './presentation/routes/userRoutes';

const app = express();
app.use(express.json());
app.use(userRoutes);


app.listen(3000);