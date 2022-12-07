// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWcEufG_5aXg_td8ZRh9XGqsaoXg7MI-w",
  authDomain: "feedapp-react-project.firebaseapp.com",
  projectId: "feedapp-react-project",
  storageBucket: "feedapp-react-project.appspot.com",
  messagingSenderId: "911921322048",
  appId: "1:911921322048:web:f0e28a3488d034e01ca7a5",
  measurementId: "G-ENBC4MBQBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);