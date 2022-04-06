import React, { Component, useEffect, useState, useContext } from "react";

import ProfileForm from "../components/Profile/ProfileForm";
import classes from "./UserProfile.module.css";
import { user } from "../fbase";
import AuthContext from "../store/auth-context";
import firebaseContext from "../store/firebase-context";
import { authService } from "../fbase";
const UserProfile = () => {
  const authCtx = useContext(AuthContext);
  const firebaseCtx = useContext(firebaseContext);
  // console.log(user);
  // if (user !== null) {
  //   // The user object has basic properties such as display name, email, etc.
  //   const displayName = user.displayName;
  //   const email = user.email;
  //   const photoURL = user.photoURL;
  //   const emailVerified = user.emailVerified;

  //   // The user's ID, unique to the Firebase project. Do NOT use
  //   // this value to authenticate with your backend server, if
  //   // you have one. Use User.getToken() instead.
  //   const uid = user.uid;
  // }

  // if (user !== null) {
  //   user.providerData.forEach((profile) => {
  //     console.log("Sign-in provider: " + profile.providerId);
  //     console.log("  Provider-specific UID: " + profile.uid);
  //     console.log("  Name: " + profile.displayName);
  //     console.log("  Email: " + profile.email);
  //     console.log("  Photo URL: " + profile.photoURL);
  //   });
  // }
  const userObj = authService.currentUser;

  // const phto = userObj.photoURL;
  const photo = firebaseCtx.photo;
  const name = firebaseCtx.name;
  return (
    // <section className={classes.profile}>
    <div className="profile-avatar">
      {userObj?.displayName ? `${userObj.displayName}의 프로필` : "프로필"}
      {/* <img className="profilemain" src={phto} /> */}
      {/* {authCtx.isLoggedIn && (
          <img
            className="profilemain"
            src={user.photoURL}
            alt={user.displayName}
          />
        )} */}
      {/* <img className="profilemain" src={phto} /> */}
      {authCtx.isLoggedIn && <img className="dfa" src={photo} />}
      {authCtx.isLoggedIn && <p className="name">{name}</p>}
    </div>

    // <h3 className="text-avatar"> {user.displayName}</h3>
    // <p>{user.email}</p>
    /* </section> */
  );
};

export default UserProfile;
