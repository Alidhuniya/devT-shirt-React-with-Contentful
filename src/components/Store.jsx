import React, { Component, Fragment } from "react";
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gotojs from './Gotojs';
import Storenav from './Storenav';
import Jsitem from './Jsitem';
import Offeritem from './Offeritem';
import Other from './Other';
import Gotoffer from './Gotoffer';


const portfoliocomp = {

    // marginTop: "7rem",
    marginBottom: "5rem"

};

const storenavcomp = {
    marginTop: "5rem"
}



class Store extends Component {
	render() {
		return (
			<Fragment>
           
			<div  style = {portfoliocomp}>
            
                <Router>
               
                <div style = {storenavcomp}>
                <Storenav />
                </div>

				<Switch>
					
					<Route path="/" exact>
                    <div >
               
               <Gotoffer />
               </div>
						<Gotojs />
                       
					</Route>
                    <Route exact path="/js/:id">
            <Jsitem />
          </Route>

					<Route path="/other" exact>
						<Other />
					</Route>
                    <Route exact path="/offers/:id">
            <Offeritem />
          </Route>
				</Switch>

                </Router>
                </div>
			</Fragment>
            
		);
	}
}

export default Store;
