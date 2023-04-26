import { useState, useEffect, KeyboardEvent  } from 'react';
import { useTypedSelector } from '../../store/hooks/useTypeSelector';
import pencil from '../../assets/pencil.svg';
import { useActions } from '../../store/hooks/useActions';
import './myTitleLabel.scss';

const MyTitleLabel: React.FC = () => {

    const [editStatus, setEditStatus] = useState<boolean>(false)
    const [newTitle, setNewTitle] = useState<string>("Файловый менеджер")
    const { activFile } = useTypedSelector(state => state.main);
    const {changeNameFileT} = useActions()

    useEffect(() => {
        activFile ? setNewTitle(activFile?.name) : setNewTitle("Файловый менеджер")  
        setEditStatus(false) //сбрасываем редактирование при переходе
    }, [activFile])

    const handleChangeTitle = (event: React.FormEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }

    const handleSaveTitle = () => {
        setEditStatus(!editStatus)

        if (editStatus && activFile) {
            changeNameFileT(activFile.id, newTitle, activFile)
        }
    }

    const handlePressEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (editStatus && event.key === 'Enter') {
            handleSaveTitle()
        } 
    }

    return (
        <div className="myTitleLabel">
            <input
                type="text"
                value={newTitle}
                onChange={e => handleChangeTitle(e)}
                onKeyDown={e => handlePressEnter(e)}
                style={ editStatus ? { border: '1px solid #dbdbdb' } : undefined}
                readOnly={!editStatus}
            />
            {newTitle !== 'Файловый менеджер'
                ? <img
                    src={pencil}
                    alt="edit"
                    onClick={handleSaveTitle}
                    title='Редактировать'
                />
                : undefined
            }
        </div>  
    )
}

export {MyTitleLabel}