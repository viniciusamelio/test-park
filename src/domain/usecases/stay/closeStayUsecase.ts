import StayDto from "../../../data/dtos/stay/stayDto";
import DomainError from "../../errors/domainError";
import FindStayOpenedRepository from "../../repositories/stay/findOpenedStayRepository";
import UpdateStayRepository from "../../repositories/stay/updateStayRepository";

class CloseStayUsecase{
    constructor(private updateStayRepository: UpdateStayRepository, private findOpenedStayRepository : FindStayOpenedRepository){}
    async call(idUser:string) : Promise<StayDto|DomainError>{
        let openedStayOrError = await this.findOpenedStayRepository.call(idUser);
        if(openedStayOrError instanceof DomainError) return openedStayOrError;
        openedStayOrError.active = false;
        const result = await this.updateStayRepository.call(openedStayOrError);
        return result;
    }
}

export default CloseStayUsecase;