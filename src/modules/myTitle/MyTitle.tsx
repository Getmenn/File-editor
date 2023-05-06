import './myTitle.scss';
import { TextSearch } from '../../components/textSearch/TextSearch';
import { MyTitleLabel } from '../../components/myTitleLabel/MyTitleLabel';
import { useAppSelector } from '../../store/hooks/redux';

const MyTitle: React.FC = () => {

    const { activFile} = useAppSelector(state => state.FileSlice)

    return (
        <div className="title">
            <MyTitleLabel />
            {activFile ? <TextSearch /> : undefined}
        </div>        
    )
}

export {MyTitle}