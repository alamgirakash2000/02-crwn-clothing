import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyALQ3A9O7UqXVLbgUddTgrGu2MmjgOP_HI",
    authDomain: "crwn-db-49039.firebaseapp.com",
    databaseURL: "https://crwn-db-49039.firebaseio.com",
    projectId: "crwn-db-49039",
    storageBucket: "crwn-db-49039.appspot.com",
    messagingSenderId: "551005170635",
    appId: "1:551005170635:web:90b50a9fd88b3c7e47e44e",
    measurementId: "G-17YYE36RFP"
  }

export const createUserProfileDocument = async (userAuth , additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if(!snapShot.exists){

        const {displayName, email}= userAuth;
        const createdAt = new Date();
        
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore= firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;