import express, { Request, Response } from 'express';
import userRoutes from './presentation/routes/userRoutes';
import authRoutes from './presentation/routes/authRoutes';
import stayRoutes from './presentation/routes/stayRoutes';
import paymentRoutes from './presentation/routes/paymentRoutes';

const app = express();
app.use(express.json());
app.use(userRoutes);
app.use(authRoutes);
app.use(stayRoutes);
app.use(paymentRoutes);

app.listen(3000);