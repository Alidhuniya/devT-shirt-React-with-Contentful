import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Js from './Js';
import Jsitem from './Jsitem';

const offerheading = {
  textAlign : "center",
  fontSize : "2.5rem"
}


export default class Gotojs extends Component {
  render() {
    return (
      <Fragment>
       <Route exact path="/">
       <div>
       <h1 style = {offerheading}>JS</h1>
            <Js />
            </div>
          </Route>
        <Switch>
          <Route exact path="/js/:id">
            <Jsitem />
          </Route>
        </Switch>
      </Fragment>
    );
  }
}


