import DomainError from "../../errors/domainError";

interface RemoveUserRepository{
    call(data:String) : Promise<String|DomainError>;
}

export default RemoveUserRepository;