import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MyButton } from '../../UI/myButton/MyButton'
import { useTypedSelector } from '../../modules/store/hooks/useTypeSelector'
import './filePage.scss'
import { useDispatch } from 'react-redux'
import { changeActivFile, reloadFile } from '../../modules/store/mainReducer'
import { useActions } from '../../modules/store/hooks/useActions'


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
        if (idFile !== null) {
            const activFile = files.find(el => el.id === idFile)
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

            <textarea
                value={contentFile !== '' ? contentFile : 'Добавьте текст'}
                onChange={e => setContentFile(e.target.value)}
            ></textarea>

            <div className="buttonWrapper">
                <MyButton name='Назад' handleClick={() => navigate("/")}/>
                <MyButton name='Сохранить' handleClick={saveChanges} />
            </div>
        </div>
    )
}

export {FilePage}