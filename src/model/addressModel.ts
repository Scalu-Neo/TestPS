import mongoose, {Document, Schema } from 'mongoose';

export interface IAddress extends Document {
    cep: string;
    bairro: string;
    localidade: string;
    logradouro: string;
    estado: string;
    
}

const addressSchema = new Schema<IAddress>({
    cep: {type: String, required: true},
    bairro: {type: String, required: true},
    localidade: {type: String, required: true},
    logradouro: {type: String, required: true},
    estado: {type: String, required: true},
    
});

export const AddressModel = mongoose.model<IAddress>('Address', addressSchema);