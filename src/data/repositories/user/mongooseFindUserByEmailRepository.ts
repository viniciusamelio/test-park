import DomainError from "../../../domain/errors/domainError";
import RepositoryError from "../../../domain/errors/repositoryError";
import FindUserByEmailRepository from "../../../domain/repositories/user/findUserByEmailRepository";
import MongooseService from "../../../external/mongoose/mongooseService";
import UserDto from "../../dtos/user/userDto";
import UserSchema from '../../../external/mongoose/schemas/user';

class MongooseFindUserByEmailRepository implements FindUserByEmailRepository{
    constructor(private mongoose: MongooseService){}

    async call(email:string): Promise<UserDto | DomainError| null> {
        let result;
        try {
            await this.mongoose.openConnection();
            result = await UserSchema.findOne(
                {
                    email: email
                }
            ).select('-password');

            if(result == null) result = new RepositoryError('Usuário não encontrado',null,404);
        } catch (error) {
            result = new RepositoryError('Houve um erro ao encontrar seu usuário',error,400);
        }
        return result;
    }

}

export default MongooseFindUserByEmailRepository;