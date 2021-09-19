type UserDto = {
    id?: string;
    name: string;
    password:string;
    email:string;
    active?:boolean;
    createdAt?:Date;
    updatedAt?:Date;
}

export default UserDto;