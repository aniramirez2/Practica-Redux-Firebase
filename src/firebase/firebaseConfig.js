// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9uFnYTpsdWmzqAn7ayoFxMZisRSB8qH8",
  authDomain: "proyecto-integrador-firebase.firebaseapp.com",
  projectId: "proyecto-integrador-firebase",
  storageBucket: "proyecto-integrador-firebase.appspot.com",
  messagingSenderId: "514643931406",
  appId: "1:514643931406:web:91030d1ac1c5472639a75f",
  measurementId: "G-5M1117HW03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)