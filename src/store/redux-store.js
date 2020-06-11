import {combineReducers, createStore} from "redux";
import {reducer} from "./reducers";


const reducers = combineReducers({
    data: reducer
})
export const store = createStore(reducers);

window.store = store;