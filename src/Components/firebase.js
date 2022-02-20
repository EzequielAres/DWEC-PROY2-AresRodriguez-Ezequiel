import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3mxIJvrA8x2YFmzU9atcDg8HTqZa6pv0",
  authDomain: "portfolio-clase.firebaseapp.com",
  projectId: "portfolio-clase",
  storageBucket: "portfolio-clase.appspot.com",
  messagingSenderId: "565192905755",
  appId: "1:565192905755:web:d8e9c2af8d34658382d4be"
};

  
  firebase.initializeApp(firebaseConfig);

  export {firebase}