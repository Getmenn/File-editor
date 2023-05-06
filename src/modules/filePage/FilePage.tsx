import { useEffect, useState, useRef, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MyButton } from '../../UI/myButton/MyButton'
import { Loader } from '../../UI/loader/Loader'
import { hightlight } from './utils/hightlight'
import './filePage.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'
import { fileApi } from '../../store/services/FilesService'
import { fileSlice } from '../../store/reducers/FileSlice'

const FilePage: React.FC = () => {

    const [idFile, setIdFile] = useState<number | null>(null)
    const [contentFile, setContentFile] = useState<string | null>(null)
    const { activFile, searchWord } = useAppSelector(state => state.FileSlice)
    const dispatch = useAppDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const [reloadFile, { }] = fileApi.useReloadFileMutation()
    const { data: files } = fileApi.useGetFilesQuery(null)
    const contentEditableRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setIdFile(Number(location.pathname.split('/')[3])) //загрузка номера активной страницы
    }, [location.pathname])
    
    useEffect(() => {
        const load = async () => {
            /* if (files && !files.length) { //если страницу обновили
                loadFilesT() 
            } */
            
            loadActivPage() //занесение активной страницы в стор
            
        }
        load()
    },[files])

    const loadActivPage = async () => { 
        let id: number 

        !idFile ? id = Number(location.pathname.split('/')[3]) : id = idFile
        
        if (files && id !== null) {
            const activFile = files.find(el => el.id === id)
            if (activFile) {
                dispatch(fileSlice.actions.changeActivFile(activFile)) // занесение активной страницы в стор
                setContentFile(activFile?.content) // заносим в стейт тект файла
            }  
        }
    }

    const saveChanges = () => { //сохранить файл
        if (activFile && idFile !== null && contentEditableRef.current && files) {
            reloadFile({...activFile, content: contentEditableRef.current?.outerText})
        }
    }    

    const light = useCallback((contentFile: string) => { //убрать лишнее дублирование
        if (contentEditableRef.current) {
            if (contentEditableRef.current.outerText === 'Добавьте текст') {
                return hightlight(searchWord, contentFile)
            } else {
                return hightlight(searchWord, contentEditableRef.current?.outerText)
            }                    
        }
    }, [searchWord])
      
    return (
        <div className='filePage'>

            <div className="textareaWrapper">
                {!activFile
                    ? <Loader />
                    : <div
                        className='textarea'
                        contentEditable = {true}
                        suppressContentEditableWarning={true} 
                        ref={contentEditableRef}
                    >
                        {contentFile ? light(contentFile) : 'Добавьте текст'}
                    </div>
                } 
            </div>
            
            <div className="buttonWrapper">
                <MyButton name='Назад' handleClick={() => navigate("/File-editor")}/>
                <MyButton name='Сохранить' handleClick={saveChanges} />
            </div>
        </div>
    )
}

export {FilePage}