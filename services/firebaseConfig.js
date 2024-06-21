// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdZEoyWwqXj7tVpvkL_AIk2shT31Jn3Vg",
  authDomain: "beanpod-faed6.firebaseapp.com",
  projectId: "beanpod-faed6",
  storageBucket: "beanpod-faed6.appspot.com",
  messagingSenderId: "500104633892",
  appId: "1:500104633892:web:1cf538269bceb3b6d502b1",
  measurementId: "G-HDJRVM1B3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };