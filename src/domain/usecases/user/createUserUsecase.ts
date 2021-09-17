import UserDto from "../../../data/dtos/user/userDto";
import DomainError from "../../errors/domainError";
import CreateUserRepository from "../../repositories/user/createUserRepository";
import EncryptService from "../../services/encryptService";

class CreateUserUsecase{
    repository : CreateUserRepository
    encryptService : EncryptService;
    
    constructor( repository : CreateUserRepository, encryptService: EncryptService){
        this.repository = repository;
        this.encryptService = encryptService;
    }

    async call(data: UserDto) : Promise<UserDto|DomainError>{
        data.password = await this.encryptService.encrypt(data.password);
        const result = await this.repository.call(data);
        return result;
    }
}

export default CreateUserUsecase;