import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4qPN5qUBvF9yxFH7HRUzqz41fOXPwdfk",
  authDomain: "queen-of-wheels.firebaseapp.com",
  projectId: "queen-of-wheels",
  storageBucket: "queen-of-wheels.appspot.com",
  messagingSenderId: "755053901493",
  appId: "1:755053901493:web:9a916234691d69704d30fc"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
