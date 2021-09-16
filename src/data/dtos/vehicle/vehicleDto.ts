import StayDto from "../stay/stayDto";

type VehicleDto = {
    id: String;
    color: String;
    licensePlate:String;
    year:Number;
    model:String;
    stay: StayDto[];
    useriD: String;
}

export default VehicleDto;