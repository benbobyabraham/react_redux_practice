import API from "../../API";
import { fetchTagsAction } from "./actions";

const api = new API();

export const fetchTags = () => {
  return async (dispatch) => {
    return api
      .getTags()
      .then((tags) => {
        dispatch(fetchTagsAction(tags));
      })
      .catch((error) => {
        alert("Failed to connect API: /tags/");
      });
  };
};
