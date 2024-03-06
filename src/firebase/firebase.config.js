import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
  // apiKey:  import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN ,
  // projectId:  import.meta.env.VITE_PROJECTID,
  // storageBucket:  import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID ,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBQ8YinBs-vLpwWERl5IBBL23HeL5XElb4",
  authDomain: "restro-64da7.firebaseapp.com",
  projectId: "restro-64da7",
  storageBucket: "restro-64da7.appspot.com",
  messagingSenderId: "571511729622",
  appId: "1:571511729622:web:fdaaa98ecfe694ef8b0877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app)