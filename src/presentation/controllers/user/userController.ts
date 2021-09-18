import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";
import MongooseCreateUserRepository from "../../../data/repositories/user/mongooseCreateUserRepository";
import User from "../../../domain/entities/user";
import DomainError from "../../../domain/errors/domainError";
import CreateUserUsecase from "../../../domain/usecases/user/createUserUsecase";
import BcryptService from "../../../external/bcrypt/bcryptService";
import MongooseService from "../../../external/mongoose/mongooseService";

class UserController{
    user?:User;
    prismaClient : PrismaClient = new PrismaClient();
    mongooseService : MongooseService = new MongooseService();
    createUserUseCase : CreateUserUsecase = new CreateUserUsecase( new MongooseCreateUserRepository(this.mongooseService), new BcryptService() );
    
    createUser = async(request:Request, response:Response) => {
        try {
            const data = request.body;
            this.user = new User(data);
            const result = await this.user.create(this.createUserUseCase);
            if(result instanceof DomainError){
                return response.status(result.statusCode!).json(result);
            }
            result.password = '';
            return response.json(result).status(201);
        } catch (error) {
            let statusCode = 500;
            if(error instanceof DomainError) statusCode = 400;
            return response.status(statusCode).json(error);
        }
        
    }
}

export default UserController;