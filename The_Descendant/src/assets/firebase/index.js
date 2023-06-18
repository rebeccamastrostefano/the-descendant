// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDQyS41_IQ36zip48_C8IZVgKYblTGFCE",
  authDomain: "the-descendant.firebaseapp.com",
  projectId: "the-descendant",
  storageBucket: "the-descendant.appspot.com",
  messagingSenderId: "757663905098",
  appId: "1:757663905098:web:485807b0f703c92944bdb3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()
export default db
