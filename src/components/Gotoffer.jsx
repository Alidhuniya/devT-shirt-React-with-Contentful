import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Offeritem from './Offeritem';
import Offer from './Offer';
const offerheading = {
  textAlign : "center",
  fontSize : "2.5rem"
}

class Gotoffer extends Component {
  render() {
    return (
      <Fragment>
       <Route exact path="/">
       <div >
       <h1 style = {offerheading}>Offer</h1>
            <Offer />
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

export default Gotoffer;
