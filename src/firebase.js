// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_KVBBnvBLGtTvactB1hgNWdd01RHKATg",
  authDomain: "aarakshaa-95bda.firebaseapp.com",
  projectId: "aarakshaa-95bda",
  storageBucket: "aarakshaa-95bda.appspot.com",
  messagingSenderId: "85754689728",
  appId: "1:85754689728:web:e71ffda5836a7d235c1525"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);