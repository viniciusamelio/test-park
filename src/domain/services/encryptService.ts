interface EncryptService{
    encrypt(data:string) : Promise<string>|string;
    compare(data:string,hash:string): Promise<boolean>|boolean;
}

export default EncryptService;