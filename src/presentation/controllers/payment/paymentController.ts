import { Request, Response } from "express";
import DomainError from "../../../domain/errors/domainError";
import PayUsecase from "../../../domain/usecases/payment/payUsecase";

class PaymentController{
    private payUsecase = new PayUsecase();

    pay = async(request:Request, response: Response) =>{
        try {
            const data = request.body;
            const result = await this.payUsecase.call(data);
            if(result instanceof DomainError){
                return response.status(result.statusCode!).json(result);
            }
            return response.json(result);
        } catch (error) {
            let statusCode = 500;
            if(error instanceof DomainError) statusCode = 400;
            return response.status(statusCode).json(error);
        }
    }
}

export default PaymentController;