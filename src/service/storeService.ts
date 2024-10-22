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

    const addressData: unknown = await response.json();

    if(!addressData){
        throw new AppError("CEP inválido", 404);
    }

    const newStore = new StoreModel({
        name, 
        address: addressData,
    });

    await newStore.create();
    return newStore;
}
