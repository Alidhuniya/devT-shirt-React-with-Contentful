import React, { Component, Fragment } from 'react';
import "../sass/3-layout/_homecontent.scss";
import {
    Link
  } from "react-router-dom";

export default class Homecontent extends Component {
    render() {
        return (
            <Fragment>
                <main className = "homeContent">
                    <div className = "homeContent__container">
                        <h1 className = "homeContent__h1">devT-shirt Swag</h1>
                        <p className = "homeContent__title">devT-shirt Swag for Developers 😎</p>
                        <p className = "homeContent__desc">As a developer, nothing piques my interest more than developer swag!
                        I created devT-shirt Swag to scratch my own itch by starting a curation of such opportunities in Sept-9 '2020'. We ship t-shirt at your Home 🚀</p>
                        <div className = "homeContent__btnBlock">
                            <button className = "homeContent__btn"><Link to = "/store">View Store</Link></button>
                        </div>
                    </div>
                </main>
            </Fragment>
        );
    }
}
