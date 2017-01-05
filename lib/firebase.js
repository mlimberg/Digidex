import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB4nsZF82t-N3ypdcPOYXhL7G5sZmRX4pM",
    authDomain: "nimble-networker-4ae61.firebaseapp.com",
    databaseURL: "https://nimble-networker-4ae61.firebaseio.com",
    storageBucket: "nimble-networker-4ae61.appspot.com",
    messagingSenderId: "896502769525"
}

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export const reference = firebase.database().ref('contacts');
