import { Request, Response } from "express";
import MongooseCreateUserRepository from "../../../data/repositories/user/mongooseCreateUserRepository";
import MongooseUpdateUserRepository from "../../../data/repositories/user/mongooseUpdateUserRepository";
import User from "../../../domain/entities/user";
import DomainError from "../../../domain/errors/domainError";
import CreateUserUsecase from "../../../domain/usecases/user/createUserUsecase";
import UpdateUserUseCase from "../../../domain/usecases/user/updateUserUsecase";
import BcryptService from "../../../external/bcrypt/bcryptService";
import MongooseService from "../../../external/mongoose/mongooseService";

class UserController{
    user?:User;
    mongooseService : MongooseService = new MongooseService();
    createUserUseCase : CreateUserUsecase = new CreateUserUsecase( new MongooseCreateUserRepository(this.mongooseService), new BcryptService() );
    updateUserUseCase : UpdateUserUseCase = new UpdateUserUseCase( new MongooseUpdateUserRepository(this.mongooseService), new BcryptService() );

    createUser = async(request:Request, response:Response) => {
        try {
            const data = request.body;
            this.user = new User(data);
            const result = await this.user.create(this.createUserUseCase);
            if(result instanceof DomainError){
                return response.status(result.statusCode!).json(result);
            }
            return response.json(result).status(201);
        } catch (error) {
            let statusCode = 500;
            if(error instanceof DomainError) statusCode = 400;
            return response.status(statusCode).json(error);
        }
        
    }

    updateUser = async(request:Request, response: Response) =>{
        try {
            const data = request.body;
            this.user = new User(data);
            const result = await this.user.update(this.updateUserUseCase);
            if(result instanceof DomainError){
                return response.status(result.statusCode!).json(result);
            }
            return response.json(result).status(201);
        } catch (error) {
            console.log(error);
            let statusCode = 500;
            if(error instanceof DomainError) statusCode = 400;
            return response.status(statusCode).json(error);
        } 
    }
}

export default UserController;