import UserDto from "../../../data/dtos/user/userDto";
import DomainError from "../../errors/domainError";

interface CreateUserRepository{
    call(data: UserDto) : UserDto|DomainError;
}

export default CreateUserRepository;