export const FETCH_TAG = "FETCH_TAG";
export const fetchTagsAction = (tags) => {
  return {
    type: "FETCH_TAG",
    payload: tags,
  };
};
