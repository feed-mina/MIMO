import React, { useState, useEffect } from "react";
import { authService } from "../fbase";
const user = authService.currentUser;

const FirebaseContext = React.createContext({
  user: "",
  displayName: () => {},
  email: () => {},
  userObj: authService.currentUser,
});

export const FirebaseContextProvide = (props) => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  const userinfo = authService.currentUser("user");
  const [user, setUser] = useState(userinfo);
  // const user = authService.currentUser;
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  const userIsPhotoURL = !!user;

  const PhotoURLHandler = (user) => {
    setUser(user);
    localStorage.setItem("user", user);
  };

  const contextValue = {
    userObj: userObj,
  };

  return (
    <FirebaseContext.Provider value={contextValue}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
