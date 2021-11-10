import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchImages } from "../reducks/images/operations";
import { getImages, getHasNext } from "../reducks/images/selectors";
import { getFavourites } from "../reducks/favourites/selectors";
import ImgFavButton from "../assets/img/fav-button.svg";
import {
  addFavourite,
  fetchFromLocalStorage,
} from "../reducks/favourites/operations";

import ImgBackground from "../assets/img/section1-bg.png";
import ImgSearch from "../assets/img/icon-search.svg";
import Preview from "../components/Common/Preview";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const images = getImages(selector);
  const hasNext = getHasNext(selector);
  const [page, setPage] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const favourites = getFavourites(selector);

  useEffect(() => {
    dispatch(fetchFromLocalStorage());
    dispatch(fetchImages(page));
    setPage(page + 1);
  }, []);

  const clickImage = (imageId) => {
    setSelectedImageId(imageId);
    setShowPreview(true);
  };

  const clickShowMore = () => {
    dispatch(fetchImages(page));
    setPage(page + 1);
  };

  const clickFavourite = (image) => {
    dispatch(addFavourite(image));
  };

  return (
    <div>
      {showPreview && (
        <Preview
          setShowPreview={setShowPreview}
          selectedImageId={selectedImageId}
        />
      )}
      <section class="section1">
        <div class="p1">
          <p>Find your zoom</p>
        </div>
        <div class="p2">
          <p>background</p>
        </div>
        <div class="search-box">
          <div class="search-box-inner">
            <form action="/search" method="get">
              <input type="text" name="search" placeholder="Type here.." />
              <img src={ImgSearch} alt="" />
            </form>
          </div>
        </div>
        <img src={ImgBackground} class="section1-bg" />
        <div class="section1-bg-cover"></div>
      </section>

      <section class="section2">
        <ul class="image-list">
          {images.map((image) => (
            <li key={image.id}>
              {Object.values(favourites).filter(
                (favoriteImage) => image.id == favoriteImage.id
              ).length === 0 && (
                <img
                  className="fav-btn"
                  src={ImgFavButton}
                  onClick={() => clickFavourite(image)}
                />
              )}
              <img
                className="list-image"
                src={image.image}
                alt=""
                onClick={() => clickImage(image.id)}
              />
            </li>
          ))}
        </ul>
        {hasNext && (
          <div class="show-more">
            <input type="submit" value="Show more" onClick={clickShowMore} />
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
