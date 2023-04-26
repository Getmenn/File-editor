import { useEffect, useState, useRef, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MyButton } from '../../UI/myButton/MyButton'
import { useTypedSelector } from '../../store/hooks/useTypeSelector'
import { useDispatch } from 'react-redux'
import { changeActivFile } from '../../store/mainReducer'
import { useActions } from '../../store/hooks/useActions'
import { Loader } from '../../UI/loader/Loader'
import { hightlight } from './utils/hightlight'
import './filePage.scss'

const FilePage: React.FC = () => {

    const [idFile, setIdFile] = useState<number | null>(null)
    const [contentFile, setContentFile] = useState<string | null>(null)
    const { files, activFile, searchWord } = useTypedSelector(state => state.main) 
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const { reloadFileT, loadFilesT } = useActions()
    const contentEditableRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setIdFile(Number(location.pathname.split('/')[2])) //загрузка номера активной страницы
    }, [location.pathname])
    
    useEffect(() => {
        const load = async () => {
            if (!files.length) { //если страницу обновили
                loadFilesT() 
            }
            else {
                loadActivPage() //занесение активной страницы в стор
            }
        }
        load()
    },[files])

    const loadActivPage = async () => { 
        let id: number 

        !idFile ? id = Number(location.pathname.split('/')[2]) : id = idFile
        
        if (id !== null) {
            const activFile = files.find(el => el.id === id)
            if (activFile) {
                dispatch(changeActivFile(activFile)) // занесение активной страницы в стор
                setContentFile(activFile?.content) // заносим в стейт тект файла
            }  
        }
    }

    const saveChanges = () => { //сохранить файл
        if (activFile && idFile !== null && contentEditableRef.current) {
            reloadFileT(idFile, contentEditableRef.current?.outerText, activFile)
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
                <MyButton name='Назад' handleClick={() => navigate("/")}/>
                <MyButton name='Сохранить' handleClick={saveChanges} />
            </div>
        </div>
    )
}

export {FilePage}