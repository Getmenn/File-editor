import { MyTitle } from "../../components/myTitle/MyTitle"
import { Router } from "../router/Router"
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