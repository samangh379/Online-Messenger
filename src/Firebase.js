import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
    .initializeApp({
        apiKey: "AIzaSyC9CgjmEiXEQ_Cwz3-zXrRle0NkCf5868k",
        authDomain: "semichat-1ed99.firebaseapp.com",
        projectId: "semichat-1ed99",
        storageBucket: "semichat-1ed99.appspot.com",
        messagingSenderId: "401753723858",
        appId: "1:401753723858:web:2f7796424a7fb17f432e0b",
    })
    .auth();
