import { Request, Response } from "express";
import MongooseCreateStayRepository from "../../../data/repositories/stay/mongooseCreateStayRepository";
import MongooseFindOpenedStayRepository from "../../../data/repositories/stay/mongooseFindOpenedStayRepository";
import MongooseFindStayRepository from "../../../data/repositories/stay/mongooseFindStayRepository";
import MongooseUpdateStayRepository from "../../../data/repositories/stay/mongooseUpdateStayRepository";
import Stay from "../../../domain/entities/stay";
import DomainError from "../../../domain/errors/domainError";
import CloseStayUsecase from "../../../domain/usecases/stay/closeStayUsecase";
import CreateStayUsecase from "../../../domain/usecases/stay/createStayUsecase";
import ListStayUsecase from "../../../domain/usecases/stay/listStayUsecase";
import UpdateStayUsecase from "../../../domain/usecases/stay/updateStayUsecase";
import MongooseService from "../../../external/mongoose/mongooseService";

class StayController{
    private stay?:Stay;
    private mongooseService = new MongooseService();
    private createStayUsecase = new CreateStayUsecase( new MongooseCreateStayRepository( this.mongooseService ), new MongooseFindOpenedStayRepository(this.mongooseService) ); 
    private updateStayUsecase = new UpdateStayUsecase( new MongooseUpdateStayRepository(this.mongooseService) );
    private closeStayUsecase = new CloseStayUsecase( new MongooseUpdateStayRepository(this.mongooseService), new MongooseFindOpenedStayRepository(this.mongooseService) );
    private listStayUsecase = new ListStayUsecase( new MongooseFindStayRepository(this.mongooseService) );

    createStay = async(request:Request, response: Response)=>{
        try {
            const data = request.body;
            this.stay = new Stay(data);
            const result = await this.stay.create(this.createStayUsecase);
            if(result instanceof DomainError){
                return response.status(result.statusCode!).json(result);
            }
            return response.status(201).json(result);
            
        } catch (error) {
            let statusCode = 500;
            if(error instanceof DomainError) statusCode = 400;
            return response.status(statusCode).json(error);
        }
    }

    closeStay = async(request:Request, response:Response) => {
        try {
            const data = request.body;
            this.stay = new Stay(data);
            const result = await this.stay.close(this.closeStayUsecase);
            if(result instanceof DomainError){
                return response.status(result.statusCode!).json(result);
            }
            return response.status(200).json(result);
            
        } catch (error) {
            let statusCode = 500;
            if(error instanceof DomainError) statusCode = 400;
            return response.status(statusCode).json(error);
        }
    }

    listStay = async(request:Request, response:Response) => {
        try {
            this.stay = new Stay();
            const result = await this.stay.list(this.listStayUsecase, request.params.user);
            if(result instanceof DomainError){
                return response.status(result.statusCode!).json(result);
            }
            return response.status(200).json(result);
            
        } catch (error) {
            let statusCode = 500;
            if(error instanceof DomainError) statusCode = 400;
            return response.status(statusCode).json(error);
        }
    }
}

export default StayController;