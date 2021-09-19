import StayDto from "../../../data/dtos/stay/stayDto";
import DomainError from "../../errors/domainError";

interface FindStayOpenedRepository{
    call(idUser:string) : Promise<StayDto|DomainError|null>;
}

export default FindStayOpenedRepository;