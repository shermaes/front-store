import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDJwMPPaThzHZ6rckSkgDJXFaRnJmR1EMw",
    authDomain: "raul-s-store.firebaseapp.com",
    projectId: "raul-s-store",
    storageBucket: "raul-s-store.appspot.com",
    messagingSenderId: "204763026410",
    appId: "1:204763026410:web:f3aba166806bbfa3d05893",
    measurementId: "G-PLC00N7HMG"
  };

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();