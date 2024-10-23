import asyncHandler from "../utils/asyncHandler";

class GenericRepository <T> {
    
    private model: any;

    constructor(model: any){
        this.model = model;
    }

    findAll = asyncHandler(async ():Promise<T[]> => {
        return await this.model.find();
    });

    findById = asyncHandler(async(id:string):Promise<T | null> => {
        return await this.model.findById(id);
    });

    create = asyncHandler(async(data: T):Promise<T | null> => {
        const newDocument = new this.model(data);
        return await newDocument.save();
    });

    update = asyncHandler(async(id:string, data: T):Promise<T | null> => {
        return await this.model.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
        });
    });

    delete = asyncHandler(async(id:string):Promise<T | null> => {
        return await this.model.findByIdAndDelete(id);
    });
}

export default GenericRepository;