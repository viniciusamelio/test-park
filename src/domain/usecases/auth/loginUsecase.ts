import AuthDto from "../../../data/dtos/auth/authDto";
import ResponseAuthDto from "../../../data/dtos/auth/responseAuthDto";
import AuthError from "../../errors/authError";
import DomainError from "../../errors/domainError";
import LoginRepository from "../../repositories/auth/loginRepository";
import EncryptService from "../../services/encryptService";

class LoginUsecase{
    constructor(private repository: LoginRepository, private hashService: EncryptService){}

    async call(data:AuthDto) : Promise<AuthError|DomainError|ResponseAuthDto>{
        const result = await this.repository.call(data);
        if(result == null){
            return new AuthError();
        }
        if(result instanceof DomainError) return result;
        
        const isValidAuth = await this.hashService.compare(data.password, result.password);
        
        if(!isValidAuth) return new AuthError();
        return {message: "Logado com sucesso!"};
    }
}

export default LoginUsecase;