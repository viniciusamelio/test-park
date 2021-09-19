import StayDto from "../../../data/dtos/stay/stayDto";
import DomainError from "../../errors/domainError";
import UpdateStayRepository from "../../repositories/stay/updateStayRepository";

class UpdateStayUsecase{
    constructor(private repository: UpdateStayRepository){}

    async call(data:StayDto) : Promise<StayDto|DomainError>{
        const result = await this.repository.call(data);
        return result;
    }
}

export default UpdateStayUsecase;