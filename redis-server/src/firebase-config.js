const {initializeApp, cert} = require('firebase-admin/app')
const {getFirestore} = require('firebase-admin/firestore')
const serviceAccount = require('./creds.json')
const dotenv = require("dotenv")

dotenv.config();

initializeApp({
    credential: cert(serviceAccount),
    storageBucket: process.env.BUCKET_URL
})

const db = getFirestore()

module.exports = {db};