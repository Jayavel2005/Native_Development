// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth  } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASjdRaRsPF1pXiI4X1_gmXFGoqEjM0heE",
    authDomain: "react-native-b3c13.firebaseapp.com",
    projectId: "react-native-b3c13",
    storageBucket: "react-native-b3c13.firebasestorage.app",
    messagingSenderId: "351369872565",
    appId: "1:351369872565:web:14c4992fe71e1d70782afc",
    measurementId: "G-17HFD4KDS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;