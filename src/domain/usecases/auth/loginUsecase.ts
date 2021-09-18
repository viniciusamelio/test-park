import AuthDto from "../../../data/dtos/auth/authDto";
import LoginRepository from "../../repositories/auth/loginRepository";

class LoginUsecase{
    constructor(private repository: LoginRepository){}

    async call(data:AuthDto){
        const result = await this.repository.call(data);
        return result;
    }
}

export default LoginUsecase;