import {prisma, PrismaClient } from ".prisma/client";
import DomainError from "../../../domain/errors/domainError";
import RepositoryError from "../../../domain/errors/repositoryError";
import CreateUserRepository from "../../../domain/repositories/user/createUserRepository";
import UserDto from "../../dtos/user/userDto";

class PrismaCreateUserRepository implements CreateUserRepository{
    client:PrismaClient;

    constructor(client:PrismaClient){
        this.client = client;
    }

    async call(data: UserDto): Promise<UserDto | DomainError>{
        let result;
        try {
            await this.client.user.create({
                data:data
            });
            result = data;
        } catch (error) {
            result = new RepositoryError('Houve um erro ao salvar o usuário',error,500);
        }

        return result;
    }

}

export default PrismaCreateUserRepository;