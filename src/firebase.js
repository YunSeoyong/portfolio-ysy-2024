// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiPRr53xQUiRqA90nLmmu9OgMwiA7ZhJM",
  authDomain: "frontend-portfolio-ysy-2024.firebaseapp.com",
  projectId: "frontend-portfolio-ysy-2024",
  storageBucket: "frontend-portfolio-ysy-2024.appspot.com",
  messagingSenderId: "834207410210",
  appId: "1:834207410210:web:9700be126bf0ef6af8027b",
  measurementId: "G-BYNF8EL03K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);