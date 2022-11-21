const {initializeApp, cert} = require('firebase-admin/app')
const {getFirestore} = require('firebase-admin/firestore')
const serviceAccount = require('./creds.json')

initializeApp({
    credential: cert(serviceAccount),
    storageBucket: "gs://oauth-tuto-299908.appspot.com"
})

const db = getFirestore()

module.exports = {db};