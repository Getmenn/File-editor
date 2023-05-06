import { AddFileButton } from '../../UI/addFileButton/AddFileButton'
import { fileApi } from '../../store/services/FilesService'

const AddFileBlock: React.FC = () => {

    const {data: files} = fileApi.useGetFilesQuery(null)
    const [addFile, {}] = fileApi.useAddFileMutation() 

    const addFileBlock = () => {
        let newId  = 0
        files && files.forEach(el => el.id > newId ? newId = el.id : undefined) // ищем максимальный id
        addFile({name: `new file ${newId + 1}`, id: newId + 1, content: ''}) 
    }

    return (
        <AddFileButton onClick={addFileBlock} />
    )
}

export {AddFileBlock}