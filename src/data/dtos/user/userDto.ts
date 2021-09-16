import VehicleDto from "../vehicle/vehicleDto";

type UserDto = {
    id: String;
    name: String;
    password:String;
    email:String;
    vehicle: VehicleDto[]
}

export default UserDto;