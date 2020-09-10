import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
// import Store from './components/Store';

import "./sass/basic-styles-scss/abstract-and-base.scss";


import {

 HashRouter
} from "react-router-dom";
 
ReactDom.render(<HashRouter><App /></HashRouter>, document.getElementById("root"));


if ('serviceWorker' in navigator) {
       window.addEventListener('load', () => {
         navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
           console.log('SW registered: ', registration);
         }).catch(registrationError => {
           console.log('SW registration failed: ', registrationError);
         });
       });
     }