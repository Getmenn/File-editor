import { AddFileButton } from '../../UI/addFileButton/AddFileButton'
import { useTypedSelector } from '../../store/hooks/useTypeSelector'
import { useActions } from '../../store/hooks/useActions'

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