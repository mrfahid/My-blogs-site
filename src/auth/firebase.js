import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// console.log('Firebase API Key:', import.meta.env.VITE_FIREBASE_API_KEY);

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyCb7YvcZP_X5AuDvqNqWq8oItD_NTwU8xs",
  authDomain: "auth-45113.firebaseapp.com",
  projectId: "auth-45113",
  storageBucket: "auth-45113.appspot.com",
  messagingSenderId: "774597874405",
  appId: "1:774597874405:web:134747f7dee2bab64d3a0c",
  measurementId: "G-9TV6XPXC9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
