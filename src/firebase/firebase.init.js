// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyWtggIu1194PMvbq5JLExl7Z0hztd57Q",
  authDomain: "green-basket-5dc7e.firebaseapp.com",
  projectId: "green-basket-5dc7e",
  storageBucket: "green-basket-5dc7e.firebasestorage.app",
  messagingSenderId: "679536511876",
  appId: "1:679536511876:web:46eb0a6baf13a8de366bd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth