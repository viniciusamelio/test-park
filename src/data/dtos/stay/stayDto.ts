type StayDto = {
    id:string;
    idUser: string;
    active: boolean; 
    totalAmount?: number;
    licensePlate: string;
    createdAt?:Date;
    updatedAt?:Date;
}

export default StayDto;