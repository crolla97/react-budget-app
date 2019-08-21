import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const fbConfig = {
  apiKey: "AIzaSyBNwH2-1CEKNQQ0W8tHeOISCfNNlc4Btm4",
  authDomain: "budget-app-bccb8.firebaseapp.com",
  databaseURL: "https://budget-app-bccb8.firebaseio.com",
  projectId: "budget-app-bccb8",
  storageBucket: "budget-app-bccb8.appspot.com",
  messagingSenderId: "5324966820",
  appId: "1:5324966820:web:b9bdb68917ea8c07"
};

// Initialize Firebase
firebase.initializeApp(fbConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();

export {
  firebase,
  firestore,
  auth
};