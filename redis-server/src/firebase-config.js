const firebaseApp = require("firebase/app"); 
const firebaseStorage = require("firebase/storage");

const dotenv = require("dotenv")

dotenv.config()

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

// Initialize Firebase
const app = firebaseApp.initializeApp(firebaseConfig);
const storage = firebaseStorage.getStorage(app, `gs://${process.env.storageBucket}`);

exports.storage = storage;