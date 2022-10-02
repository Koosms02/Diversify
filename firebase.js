
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAvb4_aMVNbWODxismxrCH9lyAWc4HmQGU",
  authDomain: "diversify-6f6cc.firebaseapp.com",
  projectId: "diversify-6f6cc",
  storageBucket: "diversify-6f6cc.appspot.com",
  messagingSenderId: "1055781017",
  appId: "1:1055781017:web:4b4e5e22e577e8d72b8808"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore()
const gProvider = new GoogleAuthProvider()

export {auth , gProvider}