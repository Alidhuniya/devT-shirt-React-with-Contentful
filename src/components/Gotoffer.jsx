import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Offeritem from './Offeritem';
import Offer from './Offer';


class Gotoffer extends Component {
  render() {
    return (
      <Fragment>
       <Route exact path="/">
            <Offer />
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
