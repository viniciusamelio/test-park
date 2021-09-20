import StayDto from "../../../data/dtos/stay/stayDto";
import DomainError from "../../errors/domainError";
import InvalidStayError from "../../errors/invalidStayError";
import FindStayOpenedRepository from "../../repositories/stay/findOpenedStayRepository";
import UpdateStayRepository from "../../repositories/stay/updateStayRepository";

class CloseStayUsecase{
    constructor(private updateStayRepository: UpdateStayRepository, private findOpenedStayRepository : FindStayOpenedRepository){}
    async call(idUser:string) : Promise<StayDto|DomainError>{
        let openedStayOrError = await this.findOpenedStayRepository.call(idUser);
        if(openedStayOrError instanceof DomainError) return openedStayOrError;
        if(openedStayOrError!=null){
            openedStayOrError.active = false;
            let stayTime = (openedStayOrError.updatedAt!.getTime() - openedStayOrError.createdAt!.getTime())/3600000;
            openedStayOrError.totalAmount = stayTime * 20;
            const result = await this.updateStayRepository.call(openedStayOrError);
            return result;
        }
        
        return new InvalidStayError('Estadia em aberto não encontrada', 404);
    }
}

export default CloseStayUsecase;