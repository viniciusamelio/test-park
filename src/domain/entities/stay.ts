import StayDto from "../../data/dtos/stay/stayDto";
import InvalidEntityError from "../errors/invalidEntity";
import CloseStayUsecase from "../usecases/stay/closeStayUsecase";
import CreateStayUsecase from "../usecases/stay/createStayUsecase";
import ListStayUsecase from "../usecases/stay/listStayUsecase";
import UpdateStayUsecase from "../usecases/stay/updateStayUsecase";

class Stay{
    constructor(public data?:StayDto){
        if(data){
            this.checkUser();
            this.checkLicensePlate();
        }
    }

    private checkUser(){
        if(!this.data?.user){
            throw new InvalidEntityError('Usuário inválido.');
        }
    }

    private checkLicensePlate(){
        if(!this.data?.licensePlate || this.data?.licensePlate.length < 7){
            throw new InvalidEntityError('Placa do veículo inválida.');
        }
    }

    create = async(usecase: CreateStayUsecase)=>{
        const result = await usecase.call(this.data!);
        return result;
    }

    update = async(usecase: UpdateStayUsecase)=>{
        const result = await usecase.call(this.data!);
        return result;  
    }

    list = async(usecase: ListStayUsecase)=>{
        const result = await usecase.call(this.data!.user);
        return result;  
    }

    close = async(usecase: CloseStayUsecase)=>{
        const result = await usecase.call(this.data!.user);
        return result;  
    }

}

export default Stay;