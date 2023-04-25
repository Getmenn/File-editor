import { useEffect } from 'react'
import { FileBlock } from "../../components/fileBlock/FileBlock" 
import { useDispatch } from 'react-redux'
import { changeActivFile, loadFiles } from '../store/mainReducer'
import { useTypedSelector } from '../store/hooks/useTypeSelector'
import { useLocation } from 'react-router-dom'
import './fileBlockArray.scss'
import { AddFileBlock } from '../../components/addFileBlock/AddFileBlock'
import { cyberApi } from './api/filesApi'
import { useActions } from '../store/hooks/useActions'

const FileBlockArray: React.FC = () => { //возможно нужно переместить в компоненты
    
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
        if (location.pathname.length === 1) {
            dispatch(changeActivFile(null))
        }
    },[])
    
    
    return (
        <>
            <div className="filesWrapper">
                {files.map(file =>
                    <FileBlock
                        key={file.id}
                        name={file.name}
                        id = {file.id}
                    />
                )}
                <AddFileBlock />
            </div>
        </> 
    )
}

export {FileBlockArray}