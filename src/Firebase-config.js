// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3ojI4H6D_srf55aQnxs5X8QfaTw6o1vw",
  authDomain: "centro-gf.firebaseapp.com",
  projectId: "centro-gf",
  storageBucket: "centro-gf.appspot.com",
  messagingSenderId: "983152489470",
  appId: "1:983152489470:web:a7b23bdb2c91ebafde46af",
  measurementId: "G-Q2L6ZHK1P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);