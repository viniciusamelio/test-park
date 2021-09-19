import StayDto from "../../../data/dtos/stay/stayDto";
import DomainError from "../../errors/domainError";

interface UpdateStayRepository{
    call(data:StayDto) : Promise<StayDto|DomainError>;
}

export default UpdateStayRepository;