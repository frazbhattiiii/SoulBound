// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore} from '@firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiHm4rO0AGl24aW1jSBA9XtZUp4OYdhvM",
    authDomain: "soulbound-fraxbhatti.firebaseapp.com",
    projectId: "soulbound-fraxbhatti",
    storageBucket: "soulbound-fraxbhatti.appspot.com",
    messagingSenderId: "741960005328",
    appId: "1:741960005328:web:cc3c57de1f8f16e53bd0d5",
    measurementId: "G-QPFWNB7H8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore();