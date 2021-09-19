type StayDto = {
    id:string;
    idUser: string;
    begin: Date;
    end?: Date|null;
    totalAmount?: number;
    licensePlate: string;
}

export default StayDto;