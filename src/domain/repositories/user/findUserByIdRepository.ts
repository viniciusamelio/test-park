import UserDto from "../../../data/dtos/user/userDto";
import DomainError from "../../errors/domainError";

interface FindUserByIdRepository{
    call(data:String) : UserDto|DomainError;
}

export default FindUserByIdRepository;