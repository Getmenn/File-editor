import { useEffect } from 'react'
import { FileBlock } from "../../components/fileBlock/FileBlock" 
import { useDispatch } from 'react-redux'
import { changeActivFile } from '../../store/mainReducer'
import { useTypedSelector } from '../../store/hooks/useTypeSelector'
import { useLocation } from 'react-router-dom'
import './fileBlockArray.scss'
import { AddFileBlock } from '../../components/addFileBlock/AddFileBlock'
import { useActions } from '../../store/hooks/useActions'
import { Loader } from '../../UI/loader/Loader'

const FileBlockArray: React.FC = () => {
    
    const {files} = useTypedSelector(state => state.main)
    const dispatch = useDispatch()
    const location = useLocation();
    const {loadFilesT} = useActions()

    useEffect(() => {
        if (!files.length) {
            loadFilesT()
        }
    },[files])

    
    useEffect(() => {      
        if (location.pathname === '/File-editor') {
            dispatch(changeActivFile(null))
        }
    },[])
    
    
    return (
        <>
            <div className="filesWrapper">
                {!files.length
                    ? <Loader />
                    :
                        <>
                            {files.map(file =>
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