import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAi8F5CauyoYHgcCOcJ9LjgxvSa1DRwI4c",
  authDomain: "arms-riders.firebaseapp.com",
  projectId: "arms-riders",
  storageBucket: "arms-riders.firebasestorage.app",
  messagingSenderId: "885377694285",
  appId: "1:885377694285:web:5f01c3c77c636d22697a04",
  measurementId: "G-P2L657SXBC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
