// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBXG_bfJZWFKdlwPahqTL2eUptQgBsHirk",
  authDomain: "kminder-b8d57.firebaseapp.com",
  projectId: "kminder-b8d57",
  storageBucket: "kminder-b8d57.appspot.com",
  messagingSenderId: "389365266765",
  appId: "1:389365266765:web:90fe81cbb6e7bd865b5f04",
  measurementId: "G-MKCY4WTD0W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);