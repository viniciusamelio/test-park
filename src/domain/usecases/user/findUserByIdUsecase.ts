import FindUserByIdRepository from "../../repositories/user/findUserByIdRepository";

class FindUserByIdUsecase{
    constructor(private repository : FindUserByIdRepository){

    }

    async call(id:string){
        const result = await this.repository.call(id);
        return result;
    }
}

export default FindUserByIdUsecase;