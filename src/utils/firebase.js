// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4iQt8N5vLf4cV_bFlL4CU4R2GrvksmsA",
  authDomain: "netflixgpt-62285.firebaseapp.com",
  projectId: "netflixgpt-62285",
  storageBucket: "netflixgpt-62285.appspot.com",
  messagingSenderId: "510586769937",
  appId: "1:510586769937:web:7bf37533c506c2950b97b0",
  measurementId: "G-N6NCY92B3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
