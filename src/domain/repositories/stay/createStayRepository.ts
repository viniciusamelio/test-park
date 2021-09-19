import StayDto from "../../../data/dtos/stay/stayDto";
import DomainError from "../../errors/domainError";

interface CreateStayRepository{
    call(data: StayDto) : Promise<StayDto|DomainError>;
}

export default CreateStayRepository;