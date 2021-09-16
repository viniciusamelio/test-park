interface EncryptService{
    encrypt(data:string) : Promise<boolean>|boolean;
    compare(data:string,hash:string): Promise<boolean>|boolean;
}

export default EncryptService;