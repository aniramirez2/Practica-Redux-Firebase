// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBYIXsoewaUGxp8NUpSiYrRqi1JqYpIkk",
  authDomain: "react-redux-firebase-app-273aa.firebaseapp.com",
  projectId: "react-redux-firebase-app-273aa",
  storageBucket: "react-redux-firebase-app-273aa.appspot.com",
  messagingSenderId: "825181370801",
  appId: "1:825181370801:web:f99934aa09cc8ef77aa590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);