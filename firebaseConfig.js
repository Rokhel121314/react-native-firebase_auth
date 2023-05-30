// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnoWsajeNskCE29LP_g7cP2O3sTU_pswI",
  authDomain: "fir-auth-693f1.firebaseapp.com",
  projectId: "fir-auth-693f1",
  storageBucket: "fir-auth-693f1.appspot.com",
  messagingSenderId: "106229743204",
  appId: "1:106229743204:web:2e937ab9da61f503002971",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
