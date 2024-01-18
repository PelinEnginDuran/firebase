// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import{getAuth, GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "first-e3b3e.firebaseapp.com",
  projectId: "first-e3b3e",
  storageBucket: "first-e3b3e.appspot.com",
  messagingSenderId: "213626634447",
  appId: "1:213626634447:web:f1f0df037ffa622c93b7ba",
  measurementId: "G-VM81QF9B3L"
};

// Initialize Firebase

const signInWithProvider = async (provider) => {
  try {
    await firebase.auth().signInWithPopup(provider);
  } catch (error) {
    console.error(error.message);
  }
};
export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  signInWithProvider(provider)};
export const signInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    signInWithProvider(provider)};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);
export const db = getFirestore(app)