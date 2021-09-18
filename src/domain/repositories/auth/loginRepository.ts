import AuthDto from "../../../data/dtos/auth/authDto";
import UserDto from "../../../data/dtos/user/userDto";
import DomainError from "../../errors/domainError";

interface LoginRepository{
    call(data: AuthDto) : Promise<UserDto|DomainError|null>
}

export default LoginRepository;