import express, { Request, Response } from 'express';
import userRoutes from './presentation/routes/userRoutes';
import authRoutes from './presentation/routes/authRoutes';

const app = express();
app.use(express.json());
app.use(userRoutes);
app.use(authRoutes);


app.listen(3000);