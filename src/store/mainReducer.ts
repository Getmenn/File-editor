import { IFiles } from './types';
import { loadTypes, actionsTypes, IStateСyber } from './types';

const defaultState: IStateСyber = {
    files: [],
    activFile: null,
}

export const mainReducer = (state = defaultState, action: actionsTypes ): IStateСyber =>{ 
    switch (action.type) {
        case loadTypes.LOAD_FILES:
            return { ...state, files: action.payload }
        case loadTypes.CHANGE_ACTIV_FILE:
            return { ...state, activFile: action.payload }
        case loadTypes.RELOAD_FILE:
            return {
                ...state, files: state.files.map(el =>
                    el.id === action.payload.id ? { ...el, content: action.payload.newContent } : el
                )
            }
        case loadTypes.DELETE_FILE:
            return { ...state, files: state.files.filter(el => el.id !== action.payload) }
        case loadTypes.ADD_FILE:
            return { ...state, files: [...state.files, { name: `new file ${action.payload}`, id: action.payload, content: '' }] }
        case loadTypes.CHANGE_NAME_FILE:
            return {
                ...state, files: state.files.map(el =>
                    el.id === action.payload.id ? { ...el, name: action.payload.newName } : el
                )
            }
        default:
            return state
    }   
}

export const loadFiles = (payload: IFiles[]) => ({ type: loadTypes.LOAD_FILES, payload }) 
export const changeActivFile = (payload: IFiles | null) => ({ type: loadTypes.CHANGE_ACTIV_FILE, payload }) 
export const reloadFile = (id: number, newContent: string) => ({ type: loadTypes.RELOAD_FILE, payload: { id, newContent } }) 
export const deleteFile = (payload: number) => ({ type: loadTypes.DELETE_FILE, payload }) 
export const addFile = (payload: number) => ({ type: loadTypes.ADD_FILE, payload}) 
export const changeNameFile = (id: number, newName: string) => ({ type: loadTypes.CHANGE_NAME_FILE, payload: {id, newName} }) 


