import DomainError from "../../../domain/errors/domainError";
import LoginRepository from "../../../domain/repositories/auth/loginRepository";
import AuthDto from "../../dtos/auth/authDto";
import UserSchema from '../../../external/mongoose/schemas/user';
import RepositoryError from "../../../domain/errors/repositoryError";
import UserDto from "../../dtos/user/userDto";
import MongooseService from "../../../external/mongoose/mongooseService";

class MongooseLoginRepository implements LoginRepository{
    constructor(private mongoose: MongooseService){}
    async call(data: AuthDto): Promise< UserDto | DomainError| null> {
        let result;
        try {
            this.mongoose.openConnection();
            const user = await UserSchema.findOne({
                email: data.email
            });
            result =  user;
        } catch (error) {
            result = new RepositoryError('Houve um erro ao tentar te logar',error,500);
        }
        this.mongoose.closeConnection();
        return result;
    }

}

export default MongooseLoginRepository;