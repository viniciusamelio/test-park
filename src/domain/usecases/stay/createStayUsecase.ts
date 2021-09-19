import StayDto from "../../../data/dtos/stay/stayDto";
import DomainError from "../../errors/domainError";
import InvalidStayError from "../../errors/invalidStayError";
import CreateStayRepository from "../../repositories/stay/createStayRepository";
import FindStayOpenedRepository from "../../repositories/stay/findOpenedStayRepository";

class CreateStayUsecase{
    
    constructor(private createStayRepository: CreateStayRepository,
                private findOpenedStayRepository: FindStayOpenedRepository){}

    async call(data:StayDto) : Promise<StayDto|DomainError>{
        const openedStayOrError = await this.findOpenedStayRepository.call(data.user);
        if(openedStayOrError instanceof DomainError) return openedStayOrError;
        if(openedStayOrError == null){
            const result = await this.createStayRepository.call(data);
            return result;
        }
        return new InvalidStayError('Já existe uma estadia aberta',400);
    }
}

export default CreateStayUsecase;