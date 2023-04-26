import './myTitle.scss';
import { TextSearch } from '../../components/textSearch/TextSearch';
import { MyTitleLabel } from '../../components/myTitleLabel/MyTitleLabel';
import { useTypedSelector } from '../../store/hooks/useTypeSelector';

const MyTitle: React.FC = () => {

    const { activFile } = useTypedSelector(state => state.main);

    return (
        <div className="title">
            <MyTitleLabel />
            {activFile ? <TextSearch /> : undefined}
        </div>        
    )
}

export {MyTitle}