// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7JI2fFrAGMaQnIpsg-02ISJPwB0BipSU",
    authDomain: "react-chat-5eb06.firebaseapp.com",
    projectId: "react-chat-5eb06",
    storageBucket: "react-chat-5eb06.appspot.com",
    messagingSenderId: "598709327647",
    appId: "1:598709327647:web:6ca5d7659358d4943ec22a",
    measurementId: "G-KK3LW4GBH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);