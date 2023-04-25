import { IFiles } from "../../types";
import { main } from "./Api";
import { AxiosResponse } from 'axios';


interface ICyberApi {
    getfiles: () => IFiles[];
}

interface IFilesResponse{
    data: IFiles[]
}

export const cyberApi  = {
    getfiles: async () => { 
        try {
            const {data} = await main.get<IFiles[]>('dataFiles');
            return data; 
        }
        catch (error) {
            console.error(error);
            throw new Error('Error');
        }
    },
    deletefile: async (id: number) => { 
        try {
            const {data} = await main.delete(`dataFiles/${id}`);
            return data; 
        }
        catch (error) {
            console.error(error);
            throw new Error('Error');
        }
    }, 
    addFile: async (id: number, newFile: IFiles) => { 
        try {
            await main.post(`dataFiles`, newFile);
        }
        catch (error) {
            console.error(error);
            throw new Error('Error');
        }
    },
    reloadFile: async (id: number, contentFile: IFiles) => {
        try {
            await main.put(`dataFiles/${id}`, contentFile);
        }
        catch (error) {
            console.error(error);
            throw new Error('Error');
        }
    }
}