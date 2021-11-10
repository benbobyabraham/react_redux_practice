import { 
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunk from 'redux-thunk';

import {PostsReducer} from '../posts/reducers';
import {ItemsReducer} from '../items/reducers';
import {CartsReducer} from '../carts/reducers';

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            posts: PostsReducer,
            items: ItemsReducer,
            carts: CartsReducer,
       }),
       compose(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        ),
        // DEBUG MODE
        // Download if you want to use : Redux DevTools
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       )
    )
}