// Import the Firebase SDKs 
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKuMC2q0tL7MPW5ZZi8fGFf2_wDcc6ZY0",
  authDomain: "fir-html-f26-v01-project.firebaseapp.com",
  projectId: "fir-html-f26-v01-project",
  storageBucket: "fir-html-f26-v01-project.firebasestorage.app",
  messagingSenderId: "1097569290751",
  appId: "1:1097569290751:web:a8e39f903b621113b27fca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export so other scripts can use it
export { auth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged };
export { db, doc, setDoc, collection, getDocs };

