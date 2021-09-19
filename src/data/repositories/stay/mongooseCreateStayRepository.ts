import DomainError from "../../../domain/errors/domainError";
import RepositoryError from "../../../domain/errors/repositoryError";
import CreateStayRepository from "../../../domain/repositories/stay/createStayRepository";
import MongooseService from "../../../external/mongoose/mongooseService";
import StayDto from "../../dtos/stay/stayDto";
import StaySchema from '../../../external/mongoose/schemas/stay';

class MongooseCreateStayRepository implements CreateStayRepository{
    constructor(private mongoose: MongooseService){}
    
    async call(data: StayDto): Promise<StayDto | DomainError> {
        let result;
        try {
            await this.mongoose.openConnection();
            result = await StaySchema.create(data);
        } catch (error) {
            result = new RepositoryError('Houve um erro ao salvar a sua estadia',error,500);
        }

        this.mongoose.closeConnection();

        return result;
    }

}

export default MongooseCreateStayRepository;