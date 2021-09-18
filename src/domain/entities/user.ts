import UserDto from "../../data/dtos/user/userDto";
import InvalidEntityError from "../errors/invalidEntity";
import CreateUserUsecase from "../usecases/user/createUserUsecase";
import FindUserByEmailUsecase from "../usecases/user/findUserByEmailUsecase";
import FindUserByIdUsecase from "../usecases/user/findUserByIdUsecase";
import ListUserUsecase from "../usecases/user/listUserUsecase";
import UpdateUserUseCase from "../usecases/user/updateUserUsecase";

class User{

    private emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    
    constructor(public data?: UserDto){
        if(data){
            this.checkEmail(data.email);
            this.checkName(data.name);
            this.checkPassword(data.password);
            this.checkActiveStatus(data.active);
        } 
    }

    private checkEmail(email:string){
        const isValid = this.emailRegex.test(email);
        if(!isValid){
            throw new InvalidEntityError('E-mail inválido.');
        }
    }

    private checkName(name:string){
        if(name.length < 3 || name.split(' ').length < 2){
            throw new InvalidEntityError('Precisamos do nome com sobrenome');
        }
    }

    private checkPassword(password:string){
        if(password.length < 4){
            throw new InvalidEntityError('A senha precisa ter 4 caracteres no mínimo');
        }
    }

    private checkActiveStatus(active?: boolean){
        if(active == null){
            this.data!.active = true;
        }
    }

    create = async (usecase: CreateUserUsecase) => {
        const result = await usecase.call(this.data!);
        return result;
    }

    update = async (usecase: UpdateUserUseCase) => {
        const result = await usecase.call(this.data!);
        return result;
    }

    list = async (usecase: ListUserUsecase) => {
        const result = await usecase.call();
        return result;
    }

    getByEmail = async (usecase: FindUserByEmailUsecase, email:string) => {
        const result = await usecase.call(email);
        return result;
    }

    getById = async (usecase: FindUserByIdUsecase, id: string) => {
        const result = await usecase.call(id);
        return result;
    }
}

export default User;