import * as Actions from "./actions";
import initialState from "../store/initialState";

export const ImagesReducer = (state = initialState.images, action) => {
  switch (action.type) {
    case Actions.FETCH_IMAGES:
      return {
        ...state,
        list: action.list,
        hasNext: action.hasNext,
      };

    default:
      return state;
  }
};
