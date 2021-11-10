import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import { ImagesReducer } from "../images/reducers";
import { TagsReducer } from "../tags/reducers";
import { FavourotesReducer } from "../favourites/reducers";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      images: ImagesReducer,
      tags: TagsReducer,
      favourites: FavourotesReducer,
    }),
    compose(
      applyMiddleware(routerMiddleware(history), thunk),
      // DEBUG MODE
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
