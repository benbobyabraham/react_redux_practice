import React, { useEffect } from "react";
import {
  deleteFavourite,
  fetchFromLocalStorage,
} from "../reducks/favourites/operations";
import { useDispatch, useSelector } from "react-redux";

import ImgSearch from "../assets/img/icon-search.svg";
import { getFavourites } from "../reducks/favourites/selectors";
// import { deleteFavourite } from "../reducks/favourites/operations";

export default function Favourites() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);

  useEffect(() => {
    dispatch(fetchFromLocalStorage());
  }, []);

  return (
    <div>
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
          <p>Favourites</p>
        </div>

        <div class="fav-box">
          {favourites &&
            favourites.map((favourite) => (
              <div>
                <div class="fav-image" key={favourite.id}>
                  <img src={favourite.image} alt="" />
                </div>
                <div class="fav-btn">
                  <a href={favourite.image} target="_blank">
                    <input
                      type="submit"
                      value="Download"
                      class="fav-download-btn"
                    />
                  </a>

                  <input
                    type="submit"
                    value="Remove"
                    class="fav-remove-btn"
                    onClick={() => dispatch(deleteFavourite(favourite.id))}
                  />
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
