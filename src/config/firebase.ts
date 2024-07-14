// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBQI-oskso5dCkfwr_9M9ibduRpnh5W12o",
    authDomain: "image-shift.firebaseapp.com",
    projectId: "image-shift",
    storageBucket: "image-shift.appspot.com",
    messagingSenderId: "816727466011",
    appId: "1:816727466011:web:472ed6fb18d3f9be0c58be",
    measurementId: "G-MG4610746W"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };