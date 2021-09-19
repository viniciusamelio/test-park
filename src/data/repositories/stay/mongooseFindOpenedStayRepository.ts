import DomainError from "../../../domain/errors/domainError";
import MongooseService from "../../../external/mongoose/mongooseService";
import StayDto from "../../dtos/stay/stayDto";
import StaySchema from '../../../external/mongoose/schemas/stay';
import RepositoryError from "../../../domain/errors/repositoryError";
import FindStayOpenedRepository from "../../../domain/repositories/stay/findOpenedStayRepository";
import InvalidStayError from "../../../domain/errors/invalidStayError";

class MongooseFindOpenedStayRepository implements FindStayOpenedRepository{
    constructor(private mongoose: MongooseService){}
    async call(userId: string): Promise<StayDto | DomainError> {
        let result;
        try {
            await this.mongoose.openConnection();
            result = await StaySchema.findOne({
                user: userId,
                active: true,
            });
            if(result == null) return new InvalidStayError('Estadia não encontrada', 404);
        } catch (error) {
            result = new RepositoryError('Houve um erro ao buscar sua estadia em aberto',error, 500);
        }
        this.mongoose.closeConnection();
        return result;
    }

}

export default MongooseFindOpenedStayRepository;