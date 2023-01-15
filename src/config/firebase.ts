// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: "AIzaSyDVnUw_GaGZ3ImAZT7ClnoZqK5e-OXSkIA",
	authDomain: "react-course-17fe4.firebaseapp.com",
	projectId: "react-course-17fe4",
	storageBucket: "react-course-17fe4.appspot.com",
	messagingSenderId: "1056781207562",
	appId: "1:1056781207562:web:1b426f07b76dab38d337f3",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
