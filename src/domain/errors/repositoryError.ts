import DomainError from "./domainError";

class RepositoryError extends DomainError{

    message: string;
    stackTrace: any;
    statusCode: number;

    constructor(message:string,stackTrace:any,statusCode:number){
        super(message);
        this.message = message;
        this.stackTrace = stackTrace;
        this.statusCode = statusCode;
    }

}


export default RepositoryError;