// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKsjinrqM-9ZxbJDGa1FyTP2ME7L5xljk",
  authDomain: "wephco-website.firebaseapp.com",
  projectId: "wephco-website",
  storageBucket: "wephco-website.appspot.com",
  messagingSenderId: "910822656448",
  appId: "1:910822656448:web:de547c047ba21db44ae025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize & export firestore
const db = getFirestore(app);

export {
  app,
  db
}