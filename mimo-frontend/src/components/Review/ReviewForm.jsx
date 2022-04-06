import React, { useState } from "react";
import FileInput from "./FileInput";
import "./ReviewForm.css";
import RatingInput from "./RatingInput";
import createReviews from "../../data/api";

const INITIAL_VALIES = {
  nickname: "",
  rating: 0,
  content: "",
  imgUrl: null,
};
function ReviewForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const [values, setValues] = useState(INITIAL_VALIES);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  async function handleInputChange(e) {
    const { name, value } = e.target;
    handleChange(name, value);
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

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <div className="fileinput">
        <FileInput
          name="imgUrl"
          value={values.imgUrl}
          onChange={handleChange}
        />
      </div>
      <hr />
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
