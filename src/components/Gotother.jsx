import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Offeritem from './Offeritem';
import Other from './Other';



class Gotother extends Component {
  render() {
    return (
      <Fragment>
      
       <Route exact path="/">
            <Other />
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
