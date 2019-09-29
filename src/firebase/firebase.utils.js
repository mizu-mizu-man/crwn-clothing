import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBJ1wCjCbltI-3KVfcLwwKqsWpaUIVD1fE",
  authDomain: "crwn-db-27397.firebaseapp.com",
  databaseURL: "https://crwn-db-27397.firebaseio.com",
  projectId: "crwn-db-27397",
  storageBucket: "",
  messagingSenderId: "938240390715",
  appId: "1:938240390715:web:8be47fcc41cd09a8518e1e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;