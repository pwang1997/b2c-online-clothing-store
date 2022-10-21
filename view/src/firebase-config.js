// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import {getStorage} from "firebase/storage";
// const dotenv = require("dotenv")
//
// dotenv.config()

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBOsVly2U5kBOBzkAnIGXBR1mIZ4Lpx7w",
    authDomain: "oauth-tuto-299908.firebaseapp.com",
    databaseURL: "https://oauth-tuto-299908-default-rtdb.firebaseio.com",
    projectId: "oauth-tuto-299908",
    storageBucket: "oauth-tuto-299908.appspot.com",
    messagingSenderId: "214855159633",
    appId: "1:214855159633:web:25f936674759e4eb1b4d70",
    measurementId: "G-4MGPHMKHEN"
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);