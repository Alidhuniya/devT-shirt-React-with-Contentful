import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Js from './Js';
import Jsitem from './Jsitem';


export default class Gotojs extends Component {
  render() {
    return (
      <Fragment>
       <Route exact path="/">
            <Js />
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


