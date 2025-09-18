import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtubPgWdEWyJO4B0gS9hp6naV4lBqNEoA",
  authDomain: "gerryrag-d993e.firebaseapp.com",
  projectId: "gerryrag-d993e",
  storageBucket: "gerryrag-d993e.firebasestorage.app",
  messagingSenderId: "493467908354",
  appId: "1:493467908354:web:e1c9a64e3b02853efd2a1b",
  measurementId: "G-HEY4P8K2MQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { app, auth, db };
