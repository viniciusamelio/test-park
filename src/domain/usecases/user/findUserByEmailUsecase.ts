import FindUserByEmailRepository from "../../repositories/user/findUserByEmailRepository";

class FindUserByEmailUsecase{
    constructor(private repository:FindUserByEmailRepository){}

    async call(email:string){
        const result = await this.repository.call(email);
        return result;
    }
}

export default FindUserByEmailUsecase;