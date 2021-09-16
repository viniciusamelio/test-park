import UserDto from "../../../data/dtos/user/userDto";
import DomainError from "../../errors/domainError";

interface UpdateUserRepository{
    call(data: UserDto) : Promise<UserDto|DomainError>;
}

export default UpdateUserRepository;