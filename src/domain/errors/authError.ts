import DomainError from "./domainError";

class AuthError implements DomainError{
    message: String;
    stackTrace?: any;
    statusCode?: number | undefined;

    constructor(){
        this.message = "Credenciais inválidas";
        this.statusCode = 401;
    }

}

export default AuthError;