import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer.js";

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) );

export default Store;