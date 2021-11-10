import * as Actions from "./actions";
import initialState from "../store/initialState";

export const TagsReducer = (state = initialState.tags, action) => {
  switch (action.type) {
    case Actions.FETCH_TAG:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
