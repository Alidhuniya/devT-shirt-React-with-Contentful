import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Offeritem from './Offeritem';
import Other from './Other';
const offerheading = {
    textAlign : "center",
    fontSize : "2.5rem"
  }


class Gotother extends Component {
  render() {
    return (
      <Fragment>
      
       <Route exact path="/">
         <div>
       <h1 style = {offerheading}>Other</h1>
            <Other />
            </div>
          </Route>
        <Switch>
          <Route exact path="/offers/:id">
            <Offeritem />
          </Route>
        </Switch>
      </Fragment>
    );
  }
}

export default Gotother;
