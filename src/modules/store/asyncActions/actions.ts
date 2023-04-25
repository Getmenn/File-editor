import { addFile, changeNameFile, deleteFile, loadFiles, reloadFile } from '../mainReducer';
import { Dispatch, AnyAction } from 'redux';
import { IFiles, actionsTypes, loadTypes } from '../../types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { cyberApi } from '../../fileBlockArray/api/filesApi';

export const loadFilesT = () => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => { 
        const data = await cyberApi.getfiles();
        dispatch(loadFiles(data));  
    }
}

export const addFileT = (id: number) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => { 
        dispatch(addFile(id))
        cyberApi.addFile(id, { name: `new file ${id}`, id: id, content: '' })
    }
}

export const reloadFileT = (id: number, contentFile: string, activFile: IFiles) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => { 
        dispatch(reloadFile(id, contentFile))
        cyberApi.reloadFile(id, {...activFile, content: contentFile})
    }
}

export const changeNameFileT = (id: number, newTitle: string, activFile: IFiles) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => { 
        dispatch(changeNameFile(id, newTitle))
        cyberApi.reloadFile(id, {...activFile, name: newTitle})
    }
}

export const deleteFileT = (id: number) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => { 
        dispatch(deleteFile(id))
        cyberApi.deletefile(id) 
    }
}