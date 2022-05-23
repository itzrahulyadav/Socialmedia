import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB1vaAi3FjKSXoBd52dpdHWU_84SMWtd3A",
    authDomain: "blogproject-5c7c1.firebaseapp.com",
    projectId: "blogproject-5c7c1",
    storageBucket: "blogproject-5c7c1.appspot.com",
    messagingSenderId: "28941384382",
    appId: "1:28941384382:web:14892992b158be07183cef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firebase.firestore().settings({experimentalForceLongPolling:true});

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

