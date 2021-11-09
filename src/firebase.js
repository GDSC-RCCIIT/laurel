// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "ENTER THE APPROPRIATE VALUES",
  authDomain: "ENTER THE APPROPRIATE VALUES",
  projectId: "ENTER THE APPROPRIATE VALUES",
  storageBucket: "ENTER THE APPROPRIATE VALUES",
  messagingSenderId: "ENTER THE APPROPRIATE VALUES",
  appId: "ENTER THE APPROPRIATE VALUES",
  measurementId: "ENTER THE APPROPRIATE VALUES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);