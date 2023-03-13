// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Be116uz8yYWtBq-DnNtgCuzn6s-PFNU",
  authDomain: "tesla-clone0000.firebaseapp.com",
  projectId: "tesla-clone0000",
  storageBucket: "tesla-clone0000.appspot.com",
  messagingSenderId: "1056601111228",
  appId: "1:1056601111228:web:70cf97ad872c72f047eeb9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);