// src/firebase.js

import { initializeApp } from "firebase/app";
// 🔽 追加
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "test-be045.firebaseapp.com",
  projectId: "test-be045",
  storageBucket: "test-be045.appspot.com",
  messagingSenderId: "514291543474",
  appId: "1:514291543474:web:70c433f19916405bdd48ab"
};

const app = initializeApp(firebaseConfig);

// 🔽 追加
export const db = getFirestore();
export default app;
