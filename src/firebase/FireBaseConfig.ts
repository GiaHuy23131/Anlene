// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgHr5YHklo2g46mmdoqPEXMUmpbrcdnK0",
  authDomain: "anlene-95156.firebaseapp.com",
  projectId: "anlene-95156",
  storageBucket: "anlene-95156.firebasestorage.app",
  messagingSenderId: "1063202405252",
  appId: "1:1063202405252:web:017919bf2d2568770bbbd1",
  measurementId: "G-6TT2CLNX81"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);