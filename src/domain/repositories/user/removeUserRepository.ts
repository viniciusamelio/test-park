import DomainError from "../../errors/domainError";

interface RemoveUserRepository{
    call(data:String) : String|DomainError;
}

export default RemoveUserRepository;