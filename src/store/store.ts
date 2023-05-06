import  FileSlice  from './reducers/FileSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { fileApi } from "./services/FilesService";


const rootReducer = combineReducers({
    FileSlice,
    [fileApi.reducerPath]: fileApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(fileApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']