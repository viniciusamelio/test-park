import DomainError from "./domainError";

class RepositoryError implements DomainError{

    message: String;
    stackTrace: any;
    statusCode: Number;

    constructor(message:String,stackTrace:any,statusCode:Number){
        this.message = message;
        this.stackTrace = stackTrace;
        this.statusCode = statusCode;
    }

}


export default RepositoryError;