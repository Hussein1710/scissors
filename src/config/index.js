// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD0l-8bRr8EzUdo6fBlixzmXVjKho1lPVs",
  authDomain: "scissors-6ed6b.firebaseapp.com",
  projectId: "scissors-6ed6b",
  storageBucket: "scissors-6ed6b.appspot.com",
  messagingSenderId: "1075790428019",
  appId: "1:1075790428019:web:686cf9bbb3c45e2c023706",
  measurementId: "G-2LMZ6B6FSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
//set up google auth
const provider = new GoogleAuthProvider();
const auth = getAuth();
signInWithRedirect(auth, provider);
export  {
    app,
    provider,
    auth,
    signInWithRedirect,
}