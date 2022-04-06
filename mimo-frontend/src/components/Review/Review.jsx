import React, { Component, useEffect, useState } from "react";

import mockReviews from "../../data/mockReview.json";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import "./Review.css";
import createReviews from "../../data/api";

function Review() {
  const [reviews, setReviews] = useState(mockReviews);

  const handledelete = (id) => {
    const nextReviews = reviews.filter((review) => review.id !== id);
    setReviews(nextReviews);
  };
  return (
    <div>
      <div className="been"></div>

      <ReviewForm />
      <ReviewList reviews={reviews} onDelete={handledelete} />
    </div>
  );
}

export default Review;
