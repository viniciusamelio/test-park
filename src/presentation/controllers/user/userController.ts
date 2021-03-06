import { Request, Response } from "express";
import MongooseCreateUserRepository from "../../../data/repositories/user/mongooseCreateUserRepository";
import MongooseFindUserByEmailRepository from "../../../data/repositories/user/mongooseFindUserByEmailRepository";
import MongooseFindUserByIdRepository from "../../../data/repositories/user/mongooseFindUserByIdRepository";
import MongooseListUserRepository from "../../../data/repositories/user/mongooseListUserRepository";
import MongooseRemoveUserRepository from "../../../data/repositories/user/mongooseRemoveUserRepository";
import MongooseUpdateUserRepository from "../../../data/repositories/user/mongooseUpdateUserRepository";
import User from "../../../domain/entities/user";
import DomainError from "../../../domain/errors/domainError";
import CreateUserUsecase from "../../../domain/usecases/user/createUserUsecase";
import FindUserByEmailUsecase from "../../../domain/usecases/user/findUserByEmailUsecase";
import FindUserByIdUsecase from "../../../domain/usecases/user/findUserByIdUsecase";
import ListUserUsecase from "../../../domain/usecases/user/listUserUsecase";
import RemoveUserUsecase from "../../../domain/usecases/user/removeUserUsecase";
import UpdateUserUseCase from "../../../domain/usecases/user/updateUserUsecase";
import BcryptService from "../../../external/bcrypt/bcryptService";
import MongooseService from "../../../external/mongoose/mongooseService";

class UserController{
    private user?:User;
    private mongooseService : MongooseService = new MongooseService();
    private createUserUseCase : CreateUserUsecase = new CreateUserUsecase( new MongooseCreateUserRepository(this.mongooseService), new BcryptService() );
    private updateUserUseCase : UpdateUserUseCase = new UpdateUserUseCase( new MongooseUpdateUserRepository(this.mongooseService), new BcryptService() );
    private listUserUseCase : ListUserUsecase = new ListUserUsecase( new MongooseListUserRepository(this.mongooseService) );
    private findUserByEmailUseCase : FindUserByEmailUsecase = new FindUserByEmailUsecase( new MongooseFindUserByEmailRepository(this.mongooseService) );
    private findUserByIdUseCase : FindUserByIdUsecase = new FindUserByIdUsecase( new MongooseFindUserByIdRepository(this.mongooseService) );
    private removeUserUseCase : RemoveUserUsecase = new  RemoveUserUsecase( new MongooseRemoveUserRepository(this.mongooseService) );

    createUser = async(request:Request, response:Response) => {
        try {
            const data = request.body;
            this.user = new User(data);
            const result = await this.user.create(this.createUserUseCase);
            if(result instanceof DomainError){
                return response.status(result.statusCode!).json(result);
            }
            return response.status(201).json(result);
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
            return response.json(result);
        } catch (error) {
            let statusCode = 500;
            if(error instanceof DomainError) statusCode = 400;
            return response.status(statusCode).json(error);
        } 
    }

    listUsers = async(request:Request,response:Response) => {
        try {
            this.user = new User();
            const result = await this.user.list(this.listUserUseCase);
            if(result instanceof DomainError){
                return response.status(result.statusCode!).json(result);
            }
            return response.json(result);
        } catch (error) {
            let statusCode = 500;
            if(error instanceof DomainError) statusCode = 400;
            return response.status(statusCode).json(error);
        } 
    }

    findUserByEmail = async(request:Request, response:Response) => {
        try {
            this.user = new User();
            const result = await this.user.getByEmail(this.findUserByEmailUseCase, request.params.email);
            if(result instanceof DomainError){
                return response.status(result.statusCode!).json(result);
            }
            return response.json(result);
        } catch (error) {
            let statusCode = 500;
            if(error instanceof DomainError) statusCode = 400;
            return response.status(statusCode).json(error);
        }  
    }

    findUserById = async(request:Request, response:Response) => {
        try {
            this.user = new User();
            const result = await this.user.getById(this.findUserByIdUseCase, request.params.id);
            if(result instanceof DomainError){
                return response.status(result.statusCode!).json(result);
            }
            return response.json(result);
        } catch (error) {
            let statusCode = 500;
            if(error instanceof DomainError) statusCode = 400;
            return response.status(statusCode).json(error);
        }  
    }

    removeUser = async(request:Request, response: Response) => {
        try {
            this.user = new User();
            const result = await this.user.remove(this.removeUserUseCase, request.params.id);
            if(result instanceof DomainError){
                return response.status(result.statusCode!).json(result);
            }
            return response.json(result);
        } catch (error) {
            let statusCode = 500;
            if(error instanceof DomainError) statusCode = 400;
            return response.status(statusCode).json(error);
        }  
    }
}

export default UserController;