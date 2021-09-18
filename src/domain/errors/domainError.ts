abstract class DomainError{
    message:String;
    stackTrace?:any;
    statusCode?:number;

    constructor(message:string){
        this.message = message;
    }
}

export default DomainError;