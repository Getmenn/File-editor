import { legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { mainReducer } from "./mainReducer"
import thunk from "redux-thunk"

const rootReduser = combineReducers({
    main: mainReducer,
})

export type RootState = ReturnType<typeof rootReduser>

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))