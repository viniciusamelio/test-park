import DomainError from "../../../domain/errors/domainError";
import UpdateStayRepository from "../../../domain/repositories/stay/updateStayRepository";
import StayDto from "../../dtos/stay/stayDto";
import StaySchema from '../../../external/mongoose/schemas/stay';
import RepositoryError from "../../../domain/errors/repositoryError";
import MongooseService from "../../../external/mongoose/mongooseService";

class MongooseUpdateStayRepository implements UpdateStayRepository{
    constructor(private mongoose: MongooseService){}
    async call(data: StayDto): Promise<StayDto | DomainError> {
        let result;
        try {
            await this.mongoose.openConnection();
            result = await StaySchema.findOneAndUpdate({
                id: data.id
            },data);
        } catch (error) {
            result = new RepositoryError('Houve um erro ao atualizar sua estadia',error, 500);
        }
        this.mongoose.closeConnection();
        return result;
    }

}

export default MongooseUpdateStayRepository;