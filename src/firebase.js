import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKUY82MQccyswXf3ismsh9jclmdCn0WqY",
  authDomain: "nike-hackaton.firebaseapp.com",
  projectId: "nike-hackaton",
  storageBucket: "nike-hackaton.appspot.com",
  messagingSenderId: "637309021454",
  appId: "1:637309021454:web:340042b8b17f3a0e697b5f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
