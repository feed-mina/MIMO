import React, { Component, useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import ProfileContent from "./ProfileContent";
import AuthContext from "../../store/auth-context";
import ProfileForm from "./ProfileForm";
import { authService } from "../../fbase";
import password from "../../Assets/img/keep.png";
import "./UserProfile.css";

const userObj = authService.currentUser;

const UserProfile = () => {
  const authCtx = useContext(AuthContext);

  const testphoto = authService.currentUser.photoURL;
  const testname = authService.currentUser.displayName;

  return (
    <>
      <div className="profileimg-container">
        <div className="profile-avatar">
          <div>
            {authCtx.isLoggedIn && (
              <img className="profileimg" src={testphoto} />
            )}
          </div>
        </div>
        {authCtx.isLoggedIn && <h2 className="name">{testname}님의 프로필</h2>}
        <hr />
      </div>
      <div className="profilebody-container">
        <span>
          <NavLink to="/changepassword">
            <div className="password">
              <img className="passwordimg" src={password} alt="change" />
              <p className="passwordtext"> 패스워드 변경</p>
            </div>
          </NavLink>
        </span>
        <hr />
      </div>
      <ProfileContent />
    </>
  );
};

export default UserProfile;
