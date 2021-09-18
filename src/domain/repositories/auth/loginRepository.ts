import AuthDto from "../../../data/dtos/auth/authDto";
import ResponseAuthDto from "../../../data/dtos/auth/responseAuthDto";
import DomainError from "../../errors/domainError";

interface LoginRepository{
    call(data: AuthDto) : Promise<ResponseAuthDto|DomainError>
}

export default LoginRepository;