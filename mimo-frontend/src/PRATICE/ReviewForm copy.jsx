import React, { useState } from "react";
import FileInput from "./FileInput";
import "./ReviewForm.css";

function ReviewForm() {
  //   const [name, setName] = useState("");
  //   const [rating, setRating] = useState(0);
  //   const [content, setcontent] = useState("");

  const [values, setValues] = useState({
    nickname: "",
    rating: 0,
    content: "",
    imgFile: null,
  });

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
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
      />
      {/* <input value={name} onChange={handleNameChange} />
      <input type="number" value={rating} onChange={handleRatingChange} />
      <textarea value={content} onChange={handleContentChange} /> */}
      <input
        name="nickname"
        value={values.nickname}
        onChange={handleInputChange}
      />
      <input
        name="rating"
        type="number"
        value={values.rating}
        onChange={handleInputChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;
