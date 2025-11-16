
// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// NOTE: The 'auth' object from 'firebase/auth' is no longer initialized or exported here.
// All authentication is now handled by the NextAuth.js service.
// This client-side configuration is only for Firestore and Storage.

const firebaseConfig = {
  apiKey: "AIzaSyDC6b4jpO2R_WjAn6aiiehgvwyb5lZ5u0w",
  authDomain: "studio-2888462696-2958d.firebaseapp.com",
  projectId: "studio-2888462696-2958d",
  storageBucket: "studio-2888462696-2958d.appspot.com",
  messagingSenderId: "556931533786",
  appId: "1:556931533786:web:bf804d5cd96c3429880ee3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
