import DomainError from "./domainError";

class InvalidEntityError implements DomainError{
    message: String;
    stackTrace?: any;
    statusCode:Number;
    constructor(message:String,stackTrace:any){
        this.message = message;
        this.stackTrace = stackTrace;
        this.statusCode = 400;
    }
}

export default InvalidEntityError;