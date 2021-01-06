import firebase from 'firebase' 
import "firebase/auth";
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCgMhME_r5gXEopzOezDNApxlB8y0TuTzA",
    authDomain: "fir-chatapp-641af.firebaseapp.com",
    projectId: "fir-chatapp-641af",
    storageBucket: "fir-chatapp-641af.appspot.com",
    messagingSenderId: "884843408645",
    appId: "1:884843408645:web:882ab49fee1bcc87889b6c"
}

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    const db = firebase.firestore().settings({
        ignoreUndefinedProperties:  true
    }) 
} 

export default firebase.app()
