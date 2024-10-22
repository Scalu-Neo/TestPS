
import { Request, Response } from 'express';

class StoreController {
    
    public async findStore(req:Request, res:Response):Promise<void>{
        const cep = req.params.cep;
    }
}
export default new StoreController();