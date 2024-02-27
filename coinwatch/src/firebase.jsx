import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxTFgbsg46mCZUrSE4FH9AMbrs78Az7NY",
  authDomain: "coinwatch-001.firebaseapp.com",
  projectId: "coinwatch-001",
  storageBucket: "coinwatch-001.appspot.com",
  messagingSenderId: "510733392774",
  appId: "1:510733392774:web:1566071639e59572f9aa07",
  measurementId: "G-N7HJK0H739",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);