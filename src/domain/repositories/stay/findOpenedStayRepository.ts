import StayDto from "../../../data/dtos/stay/stayDto";
import DomainError from "../../errors/domainError";

interface FindStayOpenedRepository{
    call(idUser:string) : Promise<StayDto|DomainError>;
}

export default FindStayOpenedRepository;