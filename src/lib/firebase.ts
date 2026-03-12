// src/lib/firebase.ts
// ─────────────────────────────────────────────────────────────
// PASTE YOUR FIREBASE CONFIG VALUES BELOW
// Get these from: Firebase Console → Project Settings → Your Apps → Web App
// ─────────────────────────────────────────────────────────────
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZGOiFdy9175er9-NkYN6WzMyCrm0GQE8",
  authDomain: "bizstarts-daca4.firebaseapp.com",
  projectId: "bizstarts-daca4",
  storageBucket: "bizstarts-daca4.firebasestorage.app",
  messagingSenderId: "995516838969",
  appId: "1:995516838969:web:11f9300539ec1b7e61e6ac" // Note: Retrieved via browser subagent from live init script
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
