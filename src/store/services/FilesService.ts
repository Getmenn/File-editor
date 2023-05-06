import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import { IFiles } from "./IFiles"


export const fileApi = createApi({
    reducerPath: 'fileApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    tagTypes: ['Files'],
    endpoints: (build) => ({
        getFiles: build.query<IFiles[], null>({// получать данные, get запрос
            query: () => ({
                url: '/dataFiles'
            }),
            providesTags: result => ['Files']
        }),
        deleteFile: build.mutation<null, number>({
            query: (id) => ({
                url: `/dataFiles/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags:  ['Files']
        }),
        addFile: build.mutation<null, IFiles>({
            query: (newFile) => ({
                url: '/dataFiles',
                method: 'POST',
                body: newFile
            }),
            invalidatesTags:  ['Files']
        }),
        reloadFile: build.mutation<null, IFiles>({
            query: (newFile) => ({
                url: `/dataFiles/${newFile.id}`,
                method: 'PUT',
                body: newFile
            }),
            invalidatesTags:  ['Files']
        }),
        
    })
})