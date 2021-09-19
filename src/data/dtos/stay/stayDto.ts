type StayDto = {
    id:string;
    id_user: string;
    begin: Date;
    end?: Date|null;
    totalAmount?: number;
    licensePlate: string;
}

export default StayDto;