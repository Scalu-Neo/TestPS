import { IStore, StoreModel } from "../model/storeModel";
import GenericRepository from "../repository/genericRepository.ts"

const storeRepository = new GenericRepository<IStore>(StoreModel);

export default storeRepository;