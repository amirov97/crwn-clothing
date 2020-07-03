import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBMwXzMTXBmoyd-HfPrVlBCYq5FJqNE4k8",
    authDomain: "crwn-clothing-39721.firebaseapp.com",
    databaseURL: "https://crwn-clothing-39721.firebaseio.com",
    projectId: "crwn-clothing-39721",
    storageBucket: "crwn-clothing-39721.appspot.com",
    messagingSenderId: "902244891790",
    appId: "1:902244891790:web:99bab8c7811918f70d1ddf",
    measurementId: "G-JL69182QJV"
}

export const createUserProfileDocument = async (userAuth , additionalData)=>{
    if(!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()
    if (!snapshot.exists){
        const {displayName , email} =userAuth
        const createdAt = new Date()
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (e) {
            console.log('error creating user', e.message())
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt : 'select_account'})
export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

export default firebase