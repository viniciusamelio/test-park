import DomainError from "./domainError";

class InvalidEntityError implements DomainError{
    message: String;
    stackTrace?: any;
    constructor(message:String,stackTrace:any){
        this.message = message;
        this.stackTrace = stackTrace;
    }
}

export default InvalidEntityError;