import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFiles } from "../services/IFiles";

interface IStateСyber{
    files: [] | IFiles[],
    activFile: null | IFiles,
    searchWord: string
}

export const initialState: IStateСyber = {
    files: [],
    activFile: null,
    searchWord: ''
}

export const fileSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        changeActivFile(state, action: PayloadAction<IFiles | null>) {
            state.activFile = action.payload;
        },
        changeSearchWord(state, action: PayloadAction<string>) {
            state.searchWord = action.payload;
        }
    },
})

export default fileSlice.reducer;

