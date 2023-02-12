import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP8ALoElTIi2p-AuZzFnefgeHQ2SSW2so",
  authDomain: "devx-journal.firebaseapp.com",
  databaseURL: "https://devx-journal-default-rtdb.firebaseio.com",
  projectId: "devx-journal",
  storageBucket: "devx-journal.appspot.com",
  messagingSenderId: "519858205194",
  appId: "1:519858205194:web:11635d49911e4948e4a5f3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
