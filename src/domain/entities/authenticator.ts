import AuthDto from "../../data/dtos/auth/authDto";
import LoginUsecase from "../usecases/auth/loginUsecase";

class Authenticator{
    constructor(private data: AuthDto, private loginUsecase: LoginUsecase){}

    login = async () => {
        const result = await this.loginUsecase.call(this.data);
        return result;
    }
}

export default Authenticator;