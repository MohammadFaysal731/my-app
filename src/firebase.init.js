// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyAmySXwCDmeGAvP9iROMcPl0kUmdI0Lo",
    authDomain: "my-app-485bb.firebaseapp.com",
    projectId: "my-app-485bb",
    storageBucket: "my-app-485bb.appspot.com",
    messagingSenderId: "284171718020",
    appId: "1:284171718020:web:4a371883cef17cbbe8a1d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;