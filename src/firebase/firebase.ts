
import firebase from 'firebase/app'
import firebaseApp from '../firebase/firebaseConfig'
import { useCollectionData } from 'react-firebase-hooks/firestore'

export const auth = firebaseApp.auth()


export const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
}

export const logout = () => {
    auth.signOut()
}

