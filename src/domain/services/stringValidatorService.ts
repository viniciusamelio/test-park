interface StringValidatorService{
    validateEmail(email:string) : boolean;
    validateName(name:string): boolean;
    validateEmptyString(string:string):boolean;
    validateMinCharacters(string:string,minCharacters:Number) : boolean;
    validateMaxCharacters(string:string,maxCharacters:Number) : boolean;
}

export default StringValidatorService;