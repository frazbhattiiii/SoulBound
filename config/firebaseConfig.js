import { initializeApp } from "firebase/app";
import {getFireStore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAiHm4rO0AGl24aW1jSBA9XtZUp4OYdhvM",
    authDomain: "soulbound-fraxbhatti.firebaseapp.com",
    projectId: "soulbound-fraxbhatti",
    storageBucket: "soulbound-fraxbhatti.appspot.com",
    messagingSenderId: "741960005328",
    appId: "1:741960005328:web:cc3c57de1f8f16e53bd0d5",
    measurementId: "G-QPFWNB7H8D"
};
const app = initializeApp(firebaseConfig);
export const db = getFireStore(app);