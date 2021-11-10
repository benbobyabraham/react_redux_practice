import API from "../../API";
import { fetchImagesAction } from "./actions";

const api = new API();

export const fetchImages = (page, search, tagId) => {
  return async (dispatch, getState) => {
    return api
      .getImages(page, search, tagId)
      .then((images) => {
        const prevImages = getState().images.list;
        const nextPosts = [...prevImages, ...images["results"]];
        let hasNext = false;
        if (images["next"]) {
          hasNext = true;
        }
        dispatch(fetchImagesAction(nextPosts, hasNext));
      })
      .catch((error) => {
        alert("Failed to connect API: /images/");
      });
  };
};
