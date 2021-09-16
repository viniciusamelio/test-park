import express, { Request, Response } from 'express';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();


app.get('/ping', async(request: Request, response: Response)=>{
    const teste = await prisma.user.findMany();
    return response.json({"ping":"pong", 'env' : teste});
});

app.listen(3000);