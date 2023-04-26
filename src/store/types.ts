export interface IStateСyber{
    files: [] | IFiles[],
    activFile: null | IFiles,
}

export enum loadTypes{
    LOAD_FILES = 'LOAD_FILES',
    CHANGE_ACTIV_FILE = 'CHANGE_ACTIV_FILE',
    RELOAD_FILE = 'RELOAD_FILE',
    DELETE_FILE = 'DELETE_FILE',
    ADD_FILE = 'ADD_FILE',
    CHANGE_NAME_FILE = 'CHANGE_NAME_FILE'
}

interface loadFiles{
    type: loadTypes.LOAD_FILES;
    payload: IFiles[];
}


interface changeActivFile{
    type: loadTypes.CHANGE_ACTIV_FILE;
    payload: IFiles | null;
}

interface reloadFile{
    type: loadTypes.RELOAD_FILE;
    payload: {
        id: number;
        newContent: string;
    }
}

interface deleteFile{
    type: loadTypes.DELETE_FILE;
    payload: number;
}

interface addFile{
    type: loadTypes.ADD_FILE;
    payload: number;
}

interface changeNameFile{
    type: loadTypes.CHANGE_NAME_FILE;
    payload: {
        id: number;
        newName: string;
    }
}


export type actionsTypes = loadFiles | changeActivFile | reloadFile | deleteFile | addFile | changeNameFile;

////////////////

export interface IFiles{
    name: string;
    id: number;
    content: string;
}
