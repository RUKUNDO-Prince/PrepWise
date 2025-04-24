import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrh1i3DgQibH8Bxd4DcaeZ2uFTdHFCAYA",
  authDomain: "prepwise-729d1.firebaseapp.com",
  projectId: "prepwise-729d1",
  storageBucket: "prepwise-729d1.firebasestorage.app",
  messagingSenderId: "2245589869",
  appId: "1:2245589869:web:bbdab7850cf55a2935f864",
  measurementId: "G-KG4NJ2YXKW"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);