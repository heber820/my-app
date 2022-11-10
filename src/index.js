import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

initializeApp ({
  apiKey: "AIzaSyDMLEMS8Qf3kCjWaqxWCBnUD3wNEKhM7co",
  authDomain: "menu-go-dfacd.firebaseapp.com",
  projectId: "menu-go-dfacd",
  storageBucket: "menu-go-dfacd.appspot.com",
  messagingSenderId: "578729127137",
  appId: "1:578729127137:web:3e16f6b47ec652f8435ba0"
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();