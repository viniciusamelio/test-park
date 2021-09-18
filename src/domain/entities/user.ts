import UserDto from "../../data/dtos/user/userDto";
import InvalidEntityError from "../errors/invalidEntity";
import CreateUserUsecase from "../usecases/user/createUserUsecase";

class User{

    private emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    
    constructor(public data : UserDto,
                private createUserUseCase: CreateUserUsecase){
        this.checkEmail(data.email);
        this.checkName(data.name);
        this.checkPassword(data.password);
        this.checkActiveStatus(data.active);
        
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
            this.data.active = true;
        }
    }

    save = async () => {
        const result = await this.createUserUseCase.call(this.data);
        return result;
    }
}

export default User;