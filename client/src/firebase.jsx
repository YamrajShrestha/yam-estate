// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "yam-estate.firebaseapp.com",
  projectId: "yam-estate",
  storageBucket: "yam-estate.appspot.com",
  messagingSenderId: "1070578536109",
  appId: "1:1070578536109:web:98f919a963ca973f9fc024",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
