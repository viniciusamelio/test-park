type StayDto = {
    id:String;
    id_status:Number;
    id_car: Number;
    begin: Date;
    end: Date|null;
    vehicleId:String;
}

export default StayDto;