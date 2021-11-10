import React, { useEffect, useState } from "react";
import ImgReaction1 from "../../assets/img/reaction-1.svg";
import ImgReaction2 from "../../assets/img/reaction-2.svg";
import ImgReaction3 from "../../assets/img/reaction-3.svg";
import ImgReaction0 from "../../assets/img/reaction-0.svg";
import ImgIconCross from "../../assets/img/icon-cross.svg";
import API from "../../API";

const api = new API();

const Reviews = ({ selectedItemId, setSelectedItemId, setShowReviews }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.getReviews(selectedItemId).then((reviews) => {
      setSelectedItemId(null);
      setReviews(reviews);
    });
  }, []);

  const getImgReaction = (like_count) => {
    switch (like_count) {
      case 1:
        return ImgReaction1;
      case 2:
        return ImgReaction2;
      case 3:
        return ImgReaction3;
      default:
        return ImgReaction0;
    }
  };

  return (
    <section class="popup">
      <div class="innter">
        <div class="popup-content">
          <div class="innter">
            <img src={ImgIconCross} onClick={() => setShowReviews(false)} class="cross" alt="" />
            <h2>Reviews</h2>
            <ul class="reviews">
              {reviews &&
                reviews.map((review) => (
                  <li>
                    <img src={getImgReaction(review.like_count)} alt="" />
                    <div class="name">{review.name}</div>
                    <div class="body">{review.body}</div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
