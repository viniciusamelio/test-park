import StayDto from "../../../data/dtos/stay/stayDto";
import DomainError from "../../errors/domainError";
import CreateStayRepository from "../../repositories/stay/createStayRepository";
import FindStayOpenedRepository from "../../repositories/stay/findOpenedStayRepository";

class CreateStayUsecase{
    
    constructor(private createStayRepository: CreateStayRepository,
                private findOpenedStayRepository: FindStayOpenedRepository){}

    async call(data:StayDto) : Promise<StayDto|DomainError>{
        const openedStayOrError = await this.findOpenedStayRepository.call(data.idUser);
        if(openedStayOrError instanceof DomainError) return openedStayOrError;
        const result = await this.createStayRepository.call(data);
        return result;
    }
}

export default CreateStayUsecase;