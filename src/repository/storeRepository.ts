import { IStore, StoreModel } from "../model/storeModel";
import { AddressModel } from "../model/addressModel";
import asyncHandler from "../utils/asyncHandler";

class StoreRepository {

    findAll = asyncHandler(async():Promise<IStore[]> => {
        return await StoreModel.find();
    });

    findById = asyncHandler(async(cep:string):Promise<IStore | null> => {
        return await StoreModel.findOne({cep});
    });

    create = asyncHandler(async(store:IStore):Promise<IStore> => {
        const newStore = new StoreModel(store);
        return await newStore.save();
    });

    update = asyncHandler(async(id:string, store:IStore):Promise<IStore | null> => {
        return await StoreModel.findByIdUpdate(id, store, {
            new:true,
            runValidators: true,
        });
    });

    delete = asyncHandler(async(id:string):Promise<IStore | null> => {
        return await StoreModel.findByIdDelete({id}); 
    });

}

export default new StoreRepository();