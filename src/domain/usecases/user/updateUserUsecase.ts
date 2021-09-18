import UserDto from "../../../data/dtos/user/userDto";
import UpdateUserRepository from "../../repositories/user/updateUserRepository";
import EncryptService from "../../services/encryptService";

class UpdateUserUseCase{
    constructor(private repository: UpdateUserRepository, private encryptService: EncryptService){}

    async call(data:UserDto){
        data.password = await this.encryptService.encrypt(data.password);
        const result = await this.repository.call(data);
        return result;
    }
}

export default UpdateUserUseCase;