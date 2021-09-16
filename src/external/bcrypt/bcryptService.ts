import EncryptService from "../../domain/services/encryptService";
import * as bcrypt from 'bcrypt';

class BcryptService implements EncryptService{
    encrypt(data: string): boolean | Promise<boolean> {
        const hash = bcrypt.hashSync(data, 10);
        return hash != null;
    }
    compare(data: string, hash: string): boolean | Promise<boolean> {
        const isItRight = bcrypt.compareSync(data, hash);
        return isItRight;
    }

}

export default BcryptService;