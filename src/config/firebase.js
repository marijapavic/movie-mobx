import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDC-6Cye65uBHEr8et8nDX4E-HzEPBsgMk",
  authDomain: "imdb-87e98.firebaseapp.com",
  projectId: "imdb-87e98",
  storageBucket: "imdb-87e98.appspot.com",
  messagingSenderId: "18782113835",
  appId: "1:18782113835:web:a3d8f713c4acf99f6bda6e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
