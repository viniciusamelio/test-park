import VehicleDto from "../vehicle/vehicleDto";

type UserDto = {
    id?: string;
    name: string;
    password:string;
    email:string;
    active?:boolean;
    vehicle?: VehicleDto[]|null;
}

export default UserDto;