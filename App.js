import React from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Providers from './navigation';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaGEYut56NMTmcMprRYJszQJSMDakopls",
  authDomain: "social-app-b04df.firebaseapp.com",
  databaseURL: "https://social-app-b04df-default-rtdb.firebaseio.com",
  projectId: "social-app-b04df",
  storageBucket: "social-app-b04df.appspot.com",
  messagingSenderId: "197775875914",
  appId: "1:197775875914:web:8618dd9a85f286a122abb3"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const App = () => {
  return <Providers/>;
}
export default App;

