import { getStorage} from "firebase/storage"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1i3ktEvQoJ4n7YjC1teoaLWhwT6AAIF0",
  authDomain: "chat-f0e18.firebaseapp.com",
  projectId: "chat-f0e18",
  storageBucket: "chat-f0e18.appspot.com",
  messagingSenderId: "872866266966",
  appId: "1:872866266966:web:b90d9364428d202c3920f7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()