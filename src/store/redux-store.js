import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer} from "./reducers";
import thunk from "redux-thunk";


const reducers = combineReducers({
    data: reducer
})
export const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;