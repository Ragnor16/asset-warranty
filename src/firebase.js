// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsKq-rPw6cQUELmG4tEdKsQTRPv54f_VA",
  authDomain: "asset-warranty.firebaseapp.com",
  projectId: "asset-warranty",
  storageBucket: "asset-warranty.appspot.com",
  messagingSenderId: "453597322535",
  appId: "1:453597322535:web:72d85866dc0064651e1d02",
  measurementId: "G-H37Y92NLTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);