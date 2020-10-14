import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDdPt_dANbMrCkJCvCtYaxDl-g-UoJvi24",
    authDomain: "airxplora.firebaseapp.com",
    databaseURL: "https://airxplora.firebaseio.com",
    projectId: "airxplora",
    storageBucket: "airxplora.appspot.com",
    messagingSenderId: "798724678627",
    appId: "1:798724678627:web:e1583685cd9517f1cbf6d6",
    measurementId: "G-29QNRH3N5R",
  });
}

let db = firebase.firestore();

export default {
  firebase,
  db,
};
