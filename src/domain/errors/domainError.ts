interface DomainError{
    message:String;
    stackTrace?:any;
    statusCode?:Number;
}

export default DomainError;