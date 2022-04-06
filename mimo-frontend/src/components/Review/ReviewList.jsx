import React from "react";
import Rating from "./Rating";
import "./ReviewList.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}
function ReviewListItem({ review, onDelete }) {
  const handleDeleteClick = () => onDelete(review.id);
  return (
    <div>
      <div>
        <div className="item-nav">
          <img className="itemimage" src={review.avatar} alt={review.name} />
          <div>
            <p className="prod_size"> {review.name}</p>
            <p> {review.nickname}</p>
            <p> {review.content}</p>
          </div>

          <Rating value={review.rating} />
          <p className="main_prod_gray">{formatDate(review.createdAt)}</p>

          <button className="delete" onClick={handleDeleteClick}>
            삭제
          </button>
          <hr />
        </div>
      </div>
    </div>
  );
}
function ReviewList({ reviews, onDelete }) {
  console.log(reviews);
  return (
    <div>
      <div>
        <ul className="mainlist">
          {" "}
          {reviews.map((review) => {
            return (
              <li className="list" key={review.id}>
                {" "}
                {<ReviewListItem review={review} onDelete={onDelete} />}
              </li>
            );
          })}{" "}
        </ul>
      </div>
    </div>
  );
}

export default ReviewList;
