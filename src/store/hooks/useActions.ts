import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import  * as ActionCreater from '../asyncActions/actions'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreater, dispatch)
}