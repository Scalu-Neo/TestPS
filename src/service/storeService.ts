import fetch from "node-fetch";
import { IStore, StoreModel } from "../model/storeModel";
import { AddressModel, IAddress } from "../model/addressModel";
import storeRepository from "../repository/storeRepository";
import AppError from "../utils/appError";


export const createStore = async(data: {name: string; cep: string}) => {
    
    const {name, cep} = data;
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if(!response.ok){
        throw new AppError("Erro ao buscar endereço por meio do CEP", 404);
    }

    const addressData: any = await response.json();
    const {cep: addressCep, bairro, localidade, logradouro, estado } = addressData;

    if(!addressData || !bairro || !localidade || !logradouro || !estado){
        throw new AppError("CEP inválido ou dados de endereço incompletos", 404);
    }

    const newAddress: IAddress = {
        cep: addressCep,
        bairro,
        localidade,
        logradouro,
        estado,
        
    } as IAddress;

    const newStore: IStore = {
        name, 
        address: newAddress,
    } as IStore;

    return await storeRepository.create(newStore, null, null);

}
