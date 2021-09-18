import UserDto from "../../../data/dtos/user/userDto";
import DomainError from "../../errors/domainError";

interface ListUserRepository{
    call() : Promise<UserDto[]|DomainError>;
}

export default ListUserRepository;