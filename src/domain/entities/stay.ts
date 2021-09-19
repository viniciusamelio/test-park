import StayDto from "../../data/dtos/stay/stayDto";
import InvalidEntityError from "../errors/invalidEntity";

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

}

export default Stay;