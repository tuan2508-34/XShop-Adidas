import React, { useEffect } from "react";
import Navbar from "./navbar/navbar"
import Intro from "./Page/Intro";
import Main from "./Page/Main";
import Shop from "./Page/muahang";
import Footer from "./footer/footer";
import Pay from "./component/Pay";
import "./navbar.css";
import {Routes,Route } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7CM_cZW7RG35vA3pol8Up_UxfmKkGEwI",
  authDomain: "xxshop-6f922.firebaseapp.com",
  projectId: "xxshop-6f922",
  storageBucket: "xxshop-6f922.appspot.com",
  messagingSenderId: "194876864973",
  appId: "1:194876864973:web:a838934beb766beb0e6c84",
  measurementId: "G-DMBW22QNZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
    
  return (
    <div className="App">
      
       < Navbar/>
       
       <Routes>
        <Route path="/" element={<Intro/>} />
        <Route path="/Pay" element={<Pay/>} />
        <Route path="/:type" element={<Main/>} />
        <Route path="/:type/:page" element={<Main/>} />
        <Route path="/:type/:page/:id" element={<Shop/>} />
         </Routes>
      <Footer/>
       
    </div>
  );
}

export default App;