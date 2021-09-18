import DomainError from "../../../domain/errors/domainError";
import RepositoryError from "../../../domain/errors/repositoryError";
import RemoveUserRepository from "../../../domain/repositories/user/removeUserRepository";
import MongooseService from "../../../external/mongoose/mongooseService";
import UserSchema from '../../../external/mongoose/schemas/user';

class MongooseRemoveUserRepository implements RemoveUserRepository{
    constructor(private mongoose : MongooseService){}

    async call(data: string): Promise<String | DomainError> {
        let result;
        try {
            await this.mongoose.openConnection();
            await UserSchema.findOneAndRemove(
                {
                    id: data,
                }
            );
            result = 'Usuário removido com sucesso';
        } catch (error) {
            result = new RepositoryError('Houve um erro ao remover seu usuário',error,400);
        }
        this.mongoose.closeConnection();
        return result;
    }
    
}

export default MongooseRemoveUserRepository;