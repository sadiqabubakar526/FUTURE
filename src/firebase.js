import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCZZEdyrz2ZGd5F4EDXMe51HjrZ7jV6yTg",
    authDomain: "future-7cab1.firebaseapp.com",
    projectId: "future-7cab1",
    storageBucket: "future-7cab1.appspot.com",
    messagingSenderId: "204759479306",
    appId: "1:204759479306:web:04e517dcb9139e8bcfdbf3",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };