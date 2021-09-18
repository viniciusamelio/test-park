import RemoveUserRepository from "../../repositories/user/removeUserRepository";

class RemoveUserUsecase{
    constructor(private repository:RemoveUserRepository){}

    async call(id:string){
        const result = await this.repository.call(id);
        if(typeof(result) == 'string'){
            return {
                "message" : result
            }
        }
        return result;
    }
}

export default RemoveUserUsecase;