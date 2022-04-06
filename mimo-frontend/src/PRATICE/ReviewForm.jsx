import React, { useState } from "react";
import FileInput from "./FileInput";
import "./ReviewForm.css";
import RatingInput from "./RatingInput";
import createReviews from "../../api";

const INITIAL_VALIES = {
  nickname: "",
  rating: 0,
  content: "",
  imgUrl: null,
};
function ReviewForm() {
  //   const [name, setName] = useState("");
  //   const [rating, setRating] = useState(0);
  //   const [content, setcontent] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const [values, setValues] = useState(INITIAL_VALIES);
  // nickname: "",
  // rating: 0,
  // content: "",
  // imgFile: null,

  //   const handleNameChange = (e) => {
  //     setName(e.target.value);
  //   };

  //   const handleRatingChange = (e) => {
  //     const nextRating = Number(e.target.value) || 0;
  //     setRating(nextRating);
  //   };

  //   const handleContentChange = (e) => {
  //     setcontent(e.target.value);
  //   };
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setValues((preValues) => ({
  //       ...preValues,
  //       [name]: value,
  //     }));
  //   };

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  async function handleInputChange(e) {
    const { name, value } = e.target;
    handleChange(name, value);
    // const response = await fetch(   "https://mimo-49f6d-default-rtdb.firebaseio.com/review.json", {
    // method:'POST',
    // body: JSON.stringify(value),
    // headers: {
    // 'content-Type':'application/json'}
    // });
    // const data = await response.json();
    // console.log(data);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", values.content);
    formData.append("imgUrl", values.imgUrl);
    formData.append("nickname", values.nickname);
    formData.append("rating", values.rating);

    await createReviews(formData);
    setValues(INITIAL_VALIES);
  };
  //   try {
  //     setSubmittingError(null);
  //     setIsSubmitting(true);
  //     await createReviews(formData);
  //   } catch (error) {
  //     setSubmittingError(error);
  //     return;
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  //   setValues(INITIAL_VALIES);
  // };
  // console.log(values);

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput name="imgUrl" value={values.imgUrl} onChange={handleChange} />
      {/* <input value={name} onChange={handleNameChange} />
      <input type="number" value={rating} onChange={handleRatingChange} />
      <textarea value={content} onChange={handleContentChange} /> */}
      <input
        type="text"
        placeholder="닉네임"
        name="nickname"
        value={values.nickname}
        onChange={handleInputChange}
      />
      <RatingInput
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        type="text"
        placeholder="자유롭게 리뷰를 남겨주세요"
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button type="submit" disabled={isSubmitting}>
        확인
      </button>
      {submittingError?.message && <div>{submittingError.message}</div>}
    </form>
  );
}

export default ReviewForm;
