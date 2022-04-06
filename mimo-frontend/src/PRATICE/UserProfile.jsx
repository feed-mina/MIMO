import React, { Component, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";

import ProfileContent from "./ProfileContent";
import AuthContext from "../../store/auth-context";
import firebaseContext from "../../store/firebase-context";
import ProfileForm from "./ProfileForm";
import { authService } from "../../fbase";

import password from "../../Assets/img/keep.png";
const userObj = authService.currentUser;

const UserProfile = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const firebaseCtx = useContext(firebaseContext);

  const photo = firebaseCtx.photo;
  const name = firebaseCtx.name;

  const testphoto = userObj.photoURL;
  const testname = userObj.displayName;
  const onpasswordcahnge = navigate("/changepassword", { replace: true });

  return (
    <>
      <div className="profile-avatar">
        {authCtx.isLoggedIn && <img className="dfa" src={testphoto} />}
        {authCtx.isLoggedIn && <p className="name">{testname}님의 프로필</p>}
        <span>
          {/* <button onClick={onpasswordcahnge}>비밀번호 수정</button> */}
          <NavLink to="/changepassword">
            <img src={password} alt="change" />
          </NavLink>
          <ProfileForm />
        </span>
      </div>
      <ProfileContent />
    </>
  );
};

export default UserProfile;
