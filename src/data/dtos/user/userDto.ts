import VehicleDto from "../vehicle/vehicleDto";

type UserDto = {
    id?: string;
    name: string;
    password:string;
    email:string;
    active?:boolean;
    vehicle?: VehicleDto[]|null;
    createdAt?:Date;
    updatedAt?:Date;
}

export default UserDto;