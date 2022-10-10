import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDddGmR-C1AWtIUJ_JanoHWFJk_6qLkLU4",
  authDomain: "testing-bcd71.firebaseapp.com",
  databaseURL:
    "https://testing-bcd71-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "testing-bcd71",
  storageBucket: "testing-bcd71.appspot.com",
  messagingSenderId: "648873171335",
  appId: "1:648873171335:web:147cc9201779041aa35b22",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
