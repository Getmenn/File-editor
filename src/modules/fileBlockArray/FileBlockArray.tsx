import { useEffect } from 'react'
import { FileBlock } from "../../components/fileBlock/FileBlock" 
import { useLocation } from 'react-router-dom'
import './fileBlockArray.scss'
import { AddFileBlock } from '../../components/addFileBlock/AddFileBlock'
import { Loader } from '../../UI/loader/Loader'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'
import { fileApi } from '../../store/services/FilesService'
import { fileSlice } from '../../store/reducers/FileSlice'

const FileBlockArray: React.FC = () => {
    
    const dispatch = useAppDispatch()
    const location = useLocation();
    const { activFile } = useAppSelector(state => state.FileSlice)
    const { data: files } = fileApi.useGetFilesQuery(null)
     
    useEffect(() => {      
        if (location.pathname === '/File-editor' && activFile) {
            dispatch(fileSlice.actions.changeActivFile(null))
        }
    },[location.pathname])
    
    
    return (
        <>
            <div className="filesWrapper">
                {files && !files.length
                    ? <Loader />
                    :
                        <>
                            {files && files.map(file =>
                                <FileBlock
                                    key={file.id}
                                    name={file.name}
                                    id = {file.id}
                                />
                            )}
                            <AddFileBlock />
                        </>
                }
                
            </div>
        </> 
    )
}

export {FileBlockArray}