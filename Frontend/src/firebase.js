// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d7994.firebaseapp.com",
  projectId: "mern-blog-d7994",
  storageBucket: "mern-blog-d7994.appspot.com",
  messagingSenderId: "888672044835",
  appId: "1:888672044835:web:5c3fe318ab70d0e29fae96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



