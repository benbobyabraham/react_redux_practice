import React, { useEffect, useState } from "react";
import { addFavourite } from "../../reducks/favourites/operations";

import ImgCloseButton from "../../assets/img/close-button.svg";
import ImgFavButton from "../../assets/img/fav-button.svg";
import ImageWomam from "../../assets/img/woman110.png";
import API from "../../API";
import { useDispatch, useSelector } from "react-redux";
import Favourites from "../../containers/Favourites";
import { getFavourites } from "../../reducks/favourites/selectors";

const api = new API();

export default function Preview({ selectedImageId, setShowPreview }) {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const [image, setImage] = useState({});
  const [showFavourite, setShowFavourite] = useState(true);
  const favourites = getFavourites(selector);

  useEffect(() => {
    api
      .getImage(selectedImageId)
      .then((response) => {
        setImage(response);
      })
      .catch((error) => {
        alert("Failed to connect API: ImageDetail");
      });
  }, []);

  const clickCloseButton = () => {
    setShowPreview(false);
  };

  const clickFavourite = (image) => {
    setShowFavourite(false);
    dispatch(addFavourite(image));
  };

  const testFunction = () => {
    console.log(favourites);
    console.log(image);
  };

  return (
    <section class="preview">
      <div class="preview-inner">
        <div class="close-button">
          <img src={ImgCloseButton} onClick={() => clickCloseButton()} alt="" />
        </div>

        <div class="main-image">
          {Object.values(favourites).filter(
            (favoriteImage) => image.id == favoriteImage.id
          ).length === 0 && (
            <img
              class="fav-btn"
              src={ImgFavButton}
              onClick={() => clickFavourite(image)}
            />
          )}
          {image.id}
          <img class="preview-img" src={image.image} />
          <div class="image-description">
            <p class="tag-title">{image.name}</p>
            <p class="description">{image.description}</p>
          </div>
        </div>

        <div class="download-preview">
          <p>Preview</p>
          <img class="checker" src={ImageWomam} alt="" />
          <img class="img-preview" src={image.image} />

          <input
            type="submit"
            value="Download"
            onClick={() => testFunction()}
          />
        </div>
      </div>
    </section>
  );
}
