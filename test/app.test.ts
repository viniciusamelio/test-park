import express from 'express';
import userRoutes from '../src/presentation/routes/userRoutes';
import authRoutes from '../src/presentation/routes/authRoutes';
import stayRoutes from '../src/presentation/routes/stayRoutes';
import paymentRoutes from '../src/presentation/routes/paymentRoutes';

const app = express();
app.use(express.json());
app.use(userRoutes);
app.use(authRoutes);
app.use(stayRoutes);
app.use(paymentRoutes);

export default app;