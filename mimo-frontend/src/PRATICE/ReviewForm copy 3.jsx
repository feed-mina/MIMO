import React, { useState } from "react";
import FileInput from "./FileInput";
import "./ReviewForm.css";
import RatingInput from "./RatingInput";
import createReviews from "../../data/api";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore/lite";
import { db } from "./firebase";

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
    // const updateDB = async(name , value) => {

    // const dbDoc = doc(db, "dbs", id);
    // try{

    // const res = await updateDB(dbDoc, {value: value});
    // console.log(res);
    // } catch(e){
    // console.log(e);
    // }finally{
    // console.log("end");
    // };
    // }

    const dataCollectionRef = collection(db, "values");

    const addData = async () => {
      try {
        const res = await addDoc(dataCollectionRef, {
          nickname: "",
          rating: 0,
          content: "",
          imgUrl: null,
        });
        console.log(res); // res는 undefined입니다.
      } catch (e) {
        console.log(e);
      }
    };

    const { id, value } = e.target;
    handleChange(id, value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const updateDB = async(name , value) => {
    // const updateDB = async(name , value) => {

    const dbDoc = doc(db, "values");
    try {
      const res = await createReviews(formData, { value: values });
      const formData = new FormData();
      formData.append("content", values.content);
      formData.append("imgUrl", values.imgUrl);
      formData.append("nickname", values.nickname);
      formData.append("rating", values.rating);

      await createReviews(formData);
      setValues(INITIAL_VALIES);
      console.log(res);
    } catch (e) {
      console.log(e);
    } finally {
      console.log("end");
    }

    // const formData = new FormData();
    // formData.append("content", values.content);
    // formData.append("imgUrl", values.imgUrl);
    // formData.append("nickname", values.nickname);
    // formData.append("rating", values.rating);

    // await createReviews(formData);
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
