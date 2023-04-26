
import { IFiles } from "../store/types";
import { main } from "./Api";

interface ICyberApi {
    getfiles: () => Promise<IFiles[]>; // Метод getfiles возвращает Promise с массивом объектов типа IFiles
    deletefile: (id: number) => Promise<void>; 
    addFile: (id: number, newFile: IFiles) => Promise<void>; 
    reloadFile: (id: number, contentFile: IFiles) => Promise<void>; 
}

export const cyberApi: ICyberApi  = {
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
            main.delete(`dataFiles/${id}`); 
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