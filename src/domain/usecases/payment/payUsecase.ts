import ResponsePayDto from "../../../data/dtos/payment/responsePayDto";
import DomainError from "../../errors/domainError";
import InvalidStayError from "../../errors/invalidStayError";
import FindStayOpenedRepository from "../../repositories/stay/findOpenedStayRepository";

class PayUsecase{

    async call(userId: string) : Promise<ResponsePayDto|DomainError>{
        return {message: "Estadia paga com sucesso!"};
    }
}

export default PayUsecase;