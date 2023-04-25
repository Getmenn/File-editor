import { MyTitle } from "../../components/myTitle/MyTitle"
import { Router } from "../../components/router/Router"
import { useTypedSelector } from "../../modules/store/hooks/useTypeSelector"
import './list.scss'

const List: React.FC = () => {

    return (
        <div className='list'>
            <MyTitle />
            <Router />
        </div>
    )
}

export {List}