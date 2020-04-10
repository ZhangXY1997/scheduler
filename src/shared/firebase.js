import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBx13HkYmrYNC6aBiqvBx7kCjWFW6hMu0U",
  authDomain: "scheduler-3e74d.firebaseapp.com",
  databaseURL: "https://scheduler-3e74d.firebaseio.com",
  projectId: "scheduler-3e74d",
  storageBucket: "scheduler-3e74d.appspot.com",
  messagingSenderId: "252395221960",
  appId: "1:252395221960:web:fdbdadad2f976ae89606fd",
  measurementId: "G-TTRTX3K3B1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

