// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF71oGDFB6YfI7qlu4C5pqXZemEpVAbVk",
  authDomain: "fir-auth-182f6.firebaseapp.com",
  projectId: "fir-auth-182f6",
  storageBucket: "fir-auth-182f6.appspot.com",
  messagingSenderId: "1004778736942",
  appId: "1:1004778736942:web:4978a07c667c8eaff7febf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
