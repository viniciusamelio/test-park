import { Request, Response } from "express";
import MongooseLoginRepository from "../../../data/repositories/auth/mongooseLoginRepository";
import Authenticator from "../../../domain/entities/authenticator";
import AuthError from "../../../domain/errors/authError";
import DomainError from "../../../domain/errors/domainError";
import LoginUsecase from "../../../domain/usecases/auth/loginUsecase";
import BcryptService from "../../../external/bcrypt/bcryptService";
import MongooseService from "../../../external/mongoose/mongooseService";

class AuthController{
    private authenticator?: Authenticator;
    private loginUsecase : LoginUsecase = new LoginUsecase( new MongooseLoginRepository(new MongooseService() ),  new BcryptService() );
    

    login = async (request:Request, response:Response) =>{
        try {
            const data = request.body;
            this.authenticator = new Authenticator(data,this.loginUsecase);
            const result = await this.authenticator.login();
            if(result instanceof DomainError){
                return response.status(result.statusCode!).json(result);
            }
            return response.json(result);
        } catch (error) {
            console.log(error);
            let statusCode = 500;
            if(error instanceof DomainError) statusCode = 400;
            return response.status(statusCode).json(error);
        }
    }
}

export default AuthController;