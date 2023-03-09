// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrZeZZabL7iDgDitMbUAuEVxIDT8vgvAg",
  authDomain: "torishop-39540.firebaseapp.com",
  projectId: "torishop-39540",
  storageBucket: "torishop-39540.appspot.com",
  messagingSenderId: "659001053563",
  appId: "1:659001053563:web:5c89c6b8289cd4d8e26dde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);