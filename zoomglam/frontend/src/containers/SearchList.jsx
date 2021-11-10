import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ImgSearch from "../assets/img/icon-search.svg";
import ImgFavButton from "../assets/img/fav-button.svg";

import { fetchImages } from "../reducks/images/operations";
import { getImages, getHasNext } from "../reducks/images/selectors";
import { addFavourite } from "../reducks/favourites/operations";
import { getFavourites } from "../reducks/favourites/selectors";

import queryString from "query-string";
import Preview from "../components/Common/Preview";

export default function SearchList() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const parsed = queryString.parse(window.location.search);
  const images = getImages(selector);
  const hasNext = getHasNext(selector);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(null);

  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  const [tagId, setTagId] = useState(null);
  const [tagName, setTagName] = useState(null);
  const favourites = getFavourites(selector);
  console.log(parsed);

  useEffect(() => {
    if (parsed.page != undefined) {
      setPage(parsed.page);
    }
    if (parsed.search != undefined) {
      setSearch(parsed.search);
    }
    if (parsed.tag_id != undefined) {
      setTagId(parsed.tag_id);
    }
  }, []);

  const clickFavourite = (image) => {
    dispatch(addFavourite(image));
  };

  useEffect(() => {
    if (search) {
      dispatch(fetchImages(page, search, null));
    }
    if (tagId) {
      dispatch(fetchImages(page, null, tagId));
    }
  }, [page, search, tagId]);

  const clickShowMore = () => {
    if (page) {
      setPage(page + 1);
    }
  };

  const clickImage = (imageId) => {
    setSelectedImageId(imageId);
    setShowPreview(true);
  };

  return (
    <div>
      {showPreview && (
        <Preview
          setShowPreview={setShowPreview}
          selectedImageId={selectedImageId}
        />
      )}
      <section class="section2">
        <div class="search-box">
          <div class="search-box-inner">
            <form action="/search" method="get">
              <input type="text" name="search" placeholder="Office Space" />
              <img src={ImgSearch} alt="" />
            </form>
          </div>
        </div>
        <div class="search-result">
          {search && (
            <>
              <p>Search </p>
              <p>
                <b>"{search}"</b>
              </p>
            </>
          )}
        </div>
        <ul class="image-list">
          {images.map((image) => (
            <li key={image.id}>
              {favourites.filter(
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
}
