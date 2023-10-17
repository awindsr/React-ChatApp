// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyCUjT5Rhb8-bfeLnqOSJCLO5iZdw2MWeR0",

  authDomain: "chatapp-b2ba1.firebaseapp.com",

  projectId: "chatapp-b2ba1",

  storageBucket: "chatapp-b2ba1.appspot.com",

  messagingSenderId: "716208940150",

  appId: "1:716208940150:web:b1123da0d2121e41132b57",

  measurementId: "G-1D5T7ZY69D"

};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();