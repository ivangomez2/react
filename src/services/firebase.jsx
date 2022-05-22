// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIin-HNgM4_7wJTBqzmct9Yukh08vlXxI",
  authDomain: "ecommerce-react-3e226.firebaseapp.com",
  projectId: "ecommerce-react-3e226",
  storageBucket: "ecommerce-react-3e226.appspot.com",
  messagingSenderId: "1094914322553",
  appId: "1:1094914322553:web:6809e3e99bea35822ee4a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)