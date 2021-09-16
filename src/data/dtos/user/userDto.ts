import VehicleDto from "../vehicle/vehicleDto";

type UserDto = {
    id: string;
    name: string;
    password:string;
    email:string;
    vehicle: VehicleDto[]
}

export default UserDto;