import firebase from "firebase/app";
import "firebase/storage";
  // Your web app’s Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDpZpADqOgfWNddtcMd7IbModjTYJ_1f1I",
    authDomain: "tojan-76f1d.firebaseapp.com",
    projectId: "tojan-76f1d",
    storageBucket: "tojan-76f1d.appspot.com",
    messagingSenderId: "992951245859",
    appId: "1:992951245859:web:c15b61d4298a82dc3da596",
    measurementId: "G-GEFXPF0W7H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default};