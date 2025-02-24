// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNJxbWcZHuBL_sTcEkTPRr_DGs-82COCU",
  authDomain: "docs-clone-701ee.firebaseapp.com",
  projectId: "docs-clone-701ee",
  storageBucket: "docs-clone-701ee.firebasestorage.app",
  messagingSenderId: "763416095709",
  appId: "1:763416095709:web:f8d4a1c2b65c9f98982434"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);