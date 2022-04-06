import React, { Component, useEffect, useState } from "react";
import { Navigate } from "react-router";

import { user } from "../../fbase";

import { CAMERAIMAGE, PROD } from "./constants";

import camera_image from "../../Assets/img/camera_image.png";
import camera_prod1 from "../../Assets/img/camera_prod1.png";
import camera_prod2 from "../../Assets/img/camera_prod2.png";
import camera_prod3 from "../../Assets/img/camera_prod3.png";

function Simulate() {
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }

  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }

  return (
    <div className="App">
      <div className="logininfotxt">
        {/* <p> {user.displayName}님 사진 찍고 가실게여~</p> */}
      </div>

      <div className="logininfosubtxt">사진띄우는 곳</div>

      <div className="skintypesection1">
        <p> 사진 선택</p>
        <p> 저장?</p>
        <p> 립 제품 보기</p>
      </div>
      <a className="camera_image" href={CAMERAIMAGE}>
        <img src={camera_image} />
      </a>
      <a className="camera_prod1" href={PROD}>
        <img src={camera_prod1} />
      </a>
      <a className="camera_prod2" href={PROD}>
        {" "}
        <img src={camera_prod2} />
      </a>
      <a className="camera_prod3" href={PROD}>
        {" "}
        <img src={camera_prod3} />
      </a>
      <span className="camera_prod1_text">제로 벨벳 틴트</span>

      <span className="camera_prod2_text">밀크티 벨벳 틴트</span>

      <span className="camera_prod3_text">블러 퍼지 틴트</span>
    </div>
  );
}

export default Simulate;
