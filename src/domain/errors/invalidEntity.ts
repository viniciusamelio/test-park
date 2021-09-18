import DomainError from "./domainError";

class InvalidEntityError extends DomainError{
    message: string;
    stackTrace?: any;
    statusCode:number;
    constructor(message:string, stackTrace?:any){
        super(message);
        this.message = message;
        this.stackTrace = stackTrace;
        this.statusCode = 400;
    }
}

export default InvalidEntityError;