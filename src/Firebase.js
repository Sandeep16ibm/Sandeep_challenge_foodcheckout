// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-dpwPeLXc2e3VwnoMTYLmRAw2dyLHWKI",
  authDomain: "foodapp-15031.firebaseapp.com",
  projectId: "foodapp-15031",
  storageBucket: "foodapp-15031.appspot.com",
  messagingSenderId: "630159240878",
  appId: "1:630159240878:web:b4cdcb3404fba7c826073f",
  measurementId: "G-90FJQQQ8Y0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
