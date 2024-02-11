import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCCsvlh59LUZlpbsFnAqdcUOZ-pjr9qm2g",
    authDomain: "netflixclone5-5807b.firebaseapp.com",
    projectId: "netflixclone5-5807b",
    storageBucket: "netflixclone5-5807b.appspot.com",
    messagingSenderId: "930641356796",
    appId: "1:930641356796:web:cda37853634e04c390f479",
    measurementId: "G-TWGJTTY561"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
