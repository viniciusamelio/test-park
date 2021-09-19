import StayDto from "../../../data/dtos/stay/stayDto";
import DomainError from "../../errors/domainError";

interface FindStayRepository{
    call(data: StayDto, userId: string):Promise<StayDto[]|DomainError>;
}

export default FindStayRepository;