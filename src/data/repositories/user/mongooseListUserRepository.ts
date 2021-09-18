import DomainError from "../../../domain/errors/domainError";
import RepositoryError from "../../../domain/errors/repositoryError";
import ListUserRepository from "../../../domain/repositories/user/listUserRepository";
import MongooseService from "../../../external/mongoose/mongooseService";
import UserDto from "../../dtos/user/userDto";
import UserSchema from '../../../external/mongoose/schemas/user';

class MongooseListUserRepository implements ListUserRepository{
    constructor(private mongoose : MongooseService){}

    async call(): Promise<UserDto[] | DomainError> {
        let result;
        try {
            await this.mongoose.openConnection();
            result = await UserSchema.find();
        } catch (error) {
            result = new RepositoryError('Houve um erro ao listar os usuários',error, 400);
        }
        this.mongoose.closeConnection();
        return result;
    }


}

export default MongooseListUserRepository;