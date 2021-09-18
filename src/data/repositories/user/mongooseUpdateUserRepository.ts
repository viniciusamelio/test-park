import DomainError from "../../../domain/errors/domainError";
import RepositoryError from "../../../domain/errors/repositoryError";
import UpdateUserRepository from "../../../domain/repositories/user/updateUserRepository";
import MongooseService from "../../../external/mongoose/mongooseService";
import UserDto from "../../dtos/user/userDto";
import UserSchema from '../../../external/mongoose/schemas/user';

class MongooseUpdateUserRepository implements UpdateUserRepository{

    constructor(private mongoose : MongooseService){}

    async call(data: UserDto): Promise<UserDto | DomainError> {
        let result;
        data.updatedAt = new Date();
        try {
            await this.mongoose.openConnection();
            result = await UserSchema.findOneAndUpdate(
                {
                    email: data.email,
                },
                data,
                {
                    new:true
                }
            ).select('-password');
        } catch (error) {
            result = new RepositoryError('Houve um erro ao atualizar seu usuário',error,400);
        }
        this.mongoose.closeConnection();
        return result;
    }

    
}

export default MongooseUpdateUserRepository;