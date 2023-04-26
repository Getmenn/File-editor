import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MyButton } from '../../UI/myButton/MyButton'
import { useTypedSelector } from '../../store/hooks/useTypeSelector'
import './filePage.scss'
import { useDispatch } from 'react-redux'
import { changeActivFile } from '../../store/mainReducer'
import { useActions } from '../../store/hooks/useActions'
import { Loader } from '../../UI/loader/Loader'

const FilePage: React.FC = () => {

    const [idFile, setIdFile] = useState<number | null>(null)
    const [contentFile, setContentFile] = useState<string>('')
    const { files, activFile } = useTypedSelector(state => state.main) 
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const { reloadFileT, loadFilesT } = useActions()

    useEffect(() => {
        setIdFile(Number(location.pathname.split('/')[2])) //загрузка номера активной страницы
    }, [location.pathname])
    
    useEffect(() => {
        const load = async () => {
            if (!files.length) { //если страницу обновили
                loadFilesT() 
            }
            else {
                loadActivPage()
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
        if (activFile && idFile !== null) {
            reloadFileT(idFile, contentFile, activFile)
        }
    }
    
    
    return (
        <div className='filePage'>

            <div className="textareaWrapper">
                {!activFile
                    ? <Loader />
                    : <textarea
                        value={contentFile !== '' ? contentFile : undefined}
                        placeholder='Добавьте текст'
                        onChange={e => setContentFile(e.target.value)}
                    >
                    </textarea>
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