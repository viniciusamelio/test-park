import ListUserRepository from "../../repositories/user/listUserRepository";

class ListUserUsecase{
    constructor(private repository:ListUserRepository){}

    async call(){
        const result = await this.repository.call();
        return result;
    }
}

export default ListUserUsecase;