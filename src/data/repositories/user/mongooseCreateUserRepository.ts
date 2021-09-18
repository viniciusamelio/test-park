import DomainError from "../../../domain/errors/domainError";
import RepositoryError from "../../../domain/errors/repositoryError";
import CreateUserRepository from "../../../domain/repositories/user/createUserRepository";
import MongooseService from "../../../external/mongoose/mongooseService";
import UserDto from "../../dtos/user/userDto";
import UserSchema from '../../../external/mongoose/schemas/user';

class MongooseCreateUserRepository implements CreateUserRepository{
    constructor(private mongoose: MongooseService){}

    async call(data: UserDto): Promise<UserDto | DomainError> {
        let result;
        try {
            result = await UserSchema.create(data);
        } catch (error) {
            result = new RepositoryError('Houve um erro ao salvar o usuário',error,500);
        }
        this.mongoose.closeConnection();
        return result;
    }

}

export default MongooseCreateUserRepository;