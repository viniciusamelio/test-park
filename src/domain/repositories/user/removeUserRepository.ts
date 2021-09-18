import DomainError from "../../errors/domainError";

interface RemoveUserRepository{
    call(data:string) : Promise<String|DomainError>;
}

export default RemoveUserRepository;