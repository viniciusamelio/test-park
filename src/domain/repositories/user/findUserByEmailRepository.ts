import UserDto from "../../../data/dtos/user/userDto";
import DomainError from "../../errors/domainError";

interface FindUserByEmailRepository{
    call(data:String) : UserDto|DomainError;
}

export default FindUserByEmailRepository;