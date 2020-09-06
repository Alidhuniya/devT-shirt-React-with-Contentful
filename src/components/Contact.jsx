import React, { Component, Fragment } from 'react';
import "../sass/3-layout/_contact.scss";

export default class Contact extends Component {
    render() {
        return (
           
                <Fragment>
              <div className = "contact">
                  <h2>Address: <span>Bhairahawa, Bank-Road</span></h2>
                  <h2>Phone_No: <span>+977-9802349099</span></h2>
                  <h2>Email: <span>devswag@gmail.com</span></h2>
              </div>
                </Fragment>
          
        )
    }
}
