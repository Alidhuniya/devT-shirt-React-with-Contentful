import React from 'react';
import ReactDom from 'react-dom';
// import App from "./App";
// import Offer from "./components/Offer";
import Gotojs from './components/Gotojs';
// import Offeritem from './components/Offeritem';
import "./sass/basic-styles-scss/abstract-and-base.scss";


import {

  BrowserRouter as Router
} from "react-router-dom";
 
ReactDom.render(<Router><Gotojs/></Router>, document.getElementById("root"));


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