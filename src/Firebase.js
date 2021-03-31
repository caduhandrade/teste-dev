import firebase from "firebase/app";
var firebaseConfig = {
  apiKey: "AIzaSyDY_NX21MRtGdr0ZUQtGl8RgAmWYY9CVGM",
  authDomain: "provataugor.firebaseapp.com",
  databaseURL: "https://provataugor-default-rtdb.firebaseio.com",
  projectId: "provataugor",
  storageBucket: "provataugor.appspot.com",
  messagingSenderId: "377073634193",
  appId: "1:377073634193:web:838f1e22edbf0c07792830",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
