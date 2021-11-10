export const FETCH_IMAGES = "FETCH_IMAGES";
export const fetchImagesAction = (images, hasNext) => {
  return {
    type: "FETCH_IMAGES",
    list: images,
    hasNext: hasNext,
  };
};
