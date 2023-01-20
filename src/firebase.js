import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCjNEhJHR08XngEy_7C2MTcccyzeh2nP5I",
    authDomain: "todo-list-a485f.firebaseapp.com",
    projectId: "todo-list-a485f",
    storageBucket: "todo-list-a485f.appspot.com",
    messagingSenderId: "74311661075",
    appId: "1:74311661075:web:aaa86a4d4daae9cfa2b1e6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
