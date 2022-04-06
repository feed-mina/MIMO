import * as firebase from "firebase/app";
import "firebase/auth";

import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// var admin = require("firebase-admin");
const firebaseConfig = {
    apiKey: "AIzaSyDJpD_iAt5tXxBHYoyMQUfZ5hnfSXW56lM",
    authDomain: "mimo-49f6d.firebaseapp.com",
    databaseURL: "https://mimo-49f6d-default-rtdb.firebaseio.com",
    projectId: "mimo-49f6d",
    storageBucket: "mimo-49f6d.appspot.com",
    messagingSenderId: "485007591771",
    appId: "1:485007591771:web:44206276d80866c57c327e",
    measurementId: "G-Y0KSXN9MTM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
// export const authService = firebase.auth();
export const authService = getAuth();
export const user = authService.currentUser;

if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    const uid = user.uid;
}