import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

function connect (state = { count: 1 }, action) {
    return state;
}

export default createStore(combineReducers({ connect}), applyMiddleware(thunk));
