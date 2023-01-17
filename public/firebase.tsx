// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Zto7xH_XQZEQcXQc6YoAMNTUcHWYVIE",
  authDomain: "fir-app-ad44a.firebaseapp.com",
  projectId: "fir-app-ad44a",
  storageBucket: "fir-app-ad44a.appspot.com",
  messagingSenderId: "648690358073",
  appId: "1:648690358073:web:e44280f26f8d7a9965bae8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};