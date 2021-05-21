import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVX5gILg0hk6rd1MaIIGAcwKBPdMwuqg4",
  authDomain: "clone-27ad8.firebaseapp.com",
  projectId: "clone-27ad8",
  storageBucket: "clone-27ad8.appspot.com",
  messagingSenderId: "83433054436",
  appId: "1:83433054436:web:49c1f9c22ad6cacd374cf1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };