import { MySearchInput } from '../../UI/mySearchInput/MySearchInput'
import './textSearch.scss'
import { useAppDispatch } from '../../store/hooks/redux'
import { fileSlice } from '../../store/reducers/FileSlice'

const TextSearch: React.FC = () => {

    const dispatch = useAppDispatch()

    const setSearchText = (event: React.FormEvent<HTMLInputElement>) => {
        dispatch(fileSlice.actions.changeSearchWord(event.currentTarget.value)) 
    }

    return (
        <>
            <MySearchInput onChange={setSearchText} />  
        </>
    )
}

export {TextSearch}