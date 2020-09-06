import React, { Component, Fragment } from 'react';
import "../sass/3-layout/_payment.scss";

export default class Payment extends Component {
    render() {
        return (
           
                <Fragment>
               <div className = "payment">
                   <h1 className = "payment__h1">Currently, We only support Cash on Delivery method</h1>
               </div>
                </Fragment>
          
        )
    }
}
