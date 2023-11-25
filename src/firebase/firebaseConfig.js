// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvhcCslcBdU1YAI4aEtZIiBF6wbZSX3PE",
  authDomain: "ejercicio-redux-firebase.firebaseapp.com",
  projectId: "ejercicio-redux-firebase",
  storageBucket: "ejercicio-redux-firebase.appspot.com",
  messagingSenderId: "801922702110",
  appId: "1:801922702110:web:228bdca41d21d2c470870f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
