import { useDispatch } from 'react-redux'
import { AddFileButton } from '../../UI/addFileButton/AddFileButton'
import { addFile } from '../../modules/store/mainReducer'
import './addFileBlock.scss'
import { useTypedSelector } from '../../modules/store/hooks/useTypeSelector'
import { useActions } from '../../modules/store/hooks/useActions'

const AddFileBlock: React.FC = () => {

    const { files } = useTypedSelector(state => state.main)
    const {addFileT} = useActions()

    const addFileBlock = () => {
        let newId  = 0
        files.forEach(el => el.id > newId ? newId = el.id : undefined) // ищем максимальный id
        addFileT(newId + 1) 
    }

    return (
        <AddFileButton onClick={addFileBlock} />
    )
}

export {AddFileBlock}