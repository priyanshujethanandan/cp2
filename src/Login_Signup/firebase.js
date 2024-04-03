// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7h_ySr0jllNV9_144g5D694q3UdVYIKY",
  authDomain: "hostel-management-3999c.firebaseapp.com",
  projectId: "hostel-management-3999c",
  storageBucket: "hostel-management-3999c.appspot.com",
  messagingSenderId: "43456234552",
  appId: "1:43456234552:web:df1e4aab632bc4373cd2cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export{app,auth};