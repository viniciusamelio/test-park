import DomainError from "../../../domain/errors/domainError";
import FindUserByIdRepository from "../../../domain/repositories/user/findUserByIdRepository";
import MongooseService from "../../../external/mongoose/mongooseService";
import UserDto from "../../dtos/user/userDto";
import UserSchema from '../../../external/mongoose/schemas/user';
import RepositoryError from "../../../domain/errors/repositoryError";

class MongooseFindUserByIdRepository implements FindUserByIdRepository{
    constructor(private mongoose: MongooseService){}

    async call(id: String): Promise<UserDto | DomainError> {
        let result;
        try {
            await this.mongoose.openConnection();
            result = await UserSchema.findById(id).select('-password');
            if(result == null) result = new RepositoryError('Usuário não encontrado',null,404);
        } catch (error) {
            result = new RepositoryError('Houve um erro ao encontrar seu usuário',error,400);
        }
        return result;
    }
}

export default MongooseFindUserByIdRepository;