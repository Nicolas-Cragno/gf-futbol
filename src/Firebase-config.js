import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue } from "firebase/database";

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

const db = getDatabase();
const refNoticias = ref (db, "noticias/");

export const getNoticias = () => {
  onValue(refNoticias, (snap) =>{
    let data = snap.val();
    
  })
}