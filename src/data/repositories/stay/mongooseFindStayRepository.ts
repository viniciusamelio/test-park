import MongooseService from "../../../external/mongoose/mongooseService";
import FindStayRepository from "../../../domain/repositories/stay/findStayRepository";
import DomainError from "../../../domain/errors/domainError";
import StayDto from "../../dtos/stay/stayDto";
import StaySchema from '../../../external/mongoose/schemas/stay';
import RepositoryError from "../../../domain/errors/repositoryError";
import InvalidStayError from "../../../domain/errors/invalidStayError";

class MongooseFindStayRepository implements FindStayRepository{
    constructor(private mongoose: MongooseService){}
    async call(userId: string): Promise<StayDto[] | DomainError> {
        let result;

        try {
            await this.mongoose.openConnection();
            result = await StaySchema.find({
                user: userId
            });
            if(result == null) result = new InvalidStayError('Estadia não encontrada', 404);
        } catch (error) {
            result = new RepositoryError('Houve um erro ao buscar a estadia',error,500);
        }
        this.mongoose.closeConnection();

        return result;    
    }
    
}

export default MongooseFindStayRepository;