import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH9fUHVQFWreYr64Y9kln4xw5_OoTiE_g",
  authDomain: "qwitter-59343.firebaseapp.com",
  projectId: "qwitter-59343",
  storageBucket: "qwitter-59343.appspot.com",
  messagingSenderId: "726414566434",
  appId: "1:726414566434:web:57ec47a70a39b38ed8d67b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default db;
