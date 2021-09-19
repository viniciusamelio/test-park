import StayDto from "../../../data/dtos/stay/stayDto";
import DomainError from "../../errors/domainError";
import FindStayRepository from "../../repositories/stay/findStayRepository";

class ListStayUsecase{
    constructor(private repository:FindStayRepository){}

    async call(userId:string) : Promise<StayDto[]|DomainError>{
        const result = await this.repository.call(userId);
        return result;
    }
}

export default ListStayUsecase;