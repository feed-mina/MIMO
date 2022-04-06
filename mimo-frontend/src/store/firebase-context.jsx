import React, { useState, useEffect } from "react";
import { authService } from "../fbase";
const userObj = authService.currentUser;

const FirebaseContext = React.createContext({
  userObj: authService.currentUser,
  photo: userObj.photoURL,
  name: userObj.displayName,
});

export const FirebaseContextProvide = (props) => {
  const contextValue = {
    userObj: userObj,
    name: userObj.displayName,
    photo: userObj.photoURL,
  };

  return (
    <FirebaseContext.Provider value={contextValue}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
