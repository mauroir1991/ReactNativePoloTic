import { combineReducers, createStore } from "redux";
import * as reducers from './reducers'

export default store = createStore(combineReducers({
    ...reducers
}))