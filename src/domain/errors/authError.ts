import DomainError from "./domainError";

class AuthError extends DomainError{
    stackTrace?: any;
    statusCode?: number | undefined;

    constructor(){
        super("Credenciais inválidas");
        this.statusCode = 401;
    }

}

export default AuthError;