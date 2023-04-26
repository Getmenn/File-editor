import { MySearchInput } from '../../UI/mySearchInput/MySearchInput'
import './textSearch.scss'
import { useDispatch } from 'react-redux'
import { changeSearchWord } from '../../store/mainReducer'

const TextSearch: React.FC = () => {

    const dispatch = useDispatch()

    const setSearchText = (event: React.FormEvent<HTMLInputElement>) => {
        dispatch(changeSearchWord(event.currentTarget.value)) 
    }

    return (
        <>
            <MySearchInput onChange={setSearchText} />  
        </>
    )
}

export {TextSearch}