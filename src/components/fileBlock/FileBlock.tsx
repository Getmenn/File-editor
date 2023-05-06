import './fileBlock.scss';
import pencil from '../../assets/pencil.svg';
import deleteIcon from '../../assets/delete.svg';
import { NavLink } from 'react-router-dom';
import { fileApi } from '../../store/services/FilesService';

interface IFileBlock{
    name: string;
    id: number;
}

const FileBlock: React.FC<IFileBlock> = ({ name, id }) => {

    const [deleteFile, {}] = fileApi.useDeleteFileMutation()
    
    const handleDelete = () => {
        deleteFile(id)     
    }

    return (
        <div className="file">
            <NavLink
                to={`file/${id}`}
            >
                {name}
            </NavLink>
            
            <div className="editBox">
                <NavLink
                    to={`file/${id}`}
                >
                    <img src={pencil} alt="edit" title="Редактировать" />
                </NavLink>
                <img src={deleteIcon} alt="delete" title="Удалить" onClick={handleDelete}/>
            </div>
        </div>
    )
}

export {FileBlock}