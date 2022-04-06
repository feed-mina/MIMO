import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {
    getFirestore,
    collection,
    deleteField,
    doc,
    getDoc,
    setDoc,
    Timestamp,
    updateDoc,
    FieldValue,
} from "@firebase/firestore";

import { initializeApp, applicationDefault, cert } from "firebase/app";
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
const db = getFirestore();

// Create a reference to the cities collection
var citiesRef = db.collection("cities");

// Create a query against the collection.
var query = citiesRef.where("state", "==", "CA");
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };
// var serviceAccount = require(firebaseConfig);

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://mimo-49f6d-default-rtdb.firebaseio.com",
// });

const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// export const authService = firebase.auth();
export const authService = getAuth();
export const userObj = getAuth().currentUser;