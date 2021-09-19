import DomainError from "./domainError";

class InvalidStayError extends DomainError{
    constructor(message:string, statusCode:number){
        super(message);
        this.statusCode = statusCode;
    }
}

export default InvalidStayError;