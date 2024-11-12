// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbHarFyCybu5nJWZthfrM87PI5wzgsG7s",
  authDomain: "test1-a86d9.firebaseapp.com",
  databaseURL: "https://test1-a86d9-default-rtdb.firebaseio.com",
  projectId: "test1-a86d9",
  storageBucket: "test1-a86d9.firebasestorage.app",
  messagingSenderId: "1018728410709",
  appId: "1:1018728410709:web:2b410970e8f9931baceedc",
  measurementId: "G-LNR3FNQJP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);