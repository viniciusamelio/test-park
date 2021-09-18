import AuthDto from "../../data/dtos/auth/authDto";
import InvalidEntityError from "../errors/invalidEntity";
import LoginUsecase from "../usecases/auth/loginUsecase";

class Authenticator{
    constructor(private data: AuthDto, private loginUsecase: LoginUsecase){
        this.checkEmail();
        this.checkPassword();
    }

    login = async () => {
        const result = await this.loginUsecase.call(this.data);
        return result;
    }

    private checkEmail = () =>{
        if(!this.data.email) throw new InvalidEntityError('E-mail necessário para realizar o login');
    }

    private checkPassword = () =>{
        if(!this.data.password) throw new InvalidEntityError('Senha necessária para realizar o login');
    }
}

export default Authenticator;