import React, { Component, Fragment } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Route, Switch } from "react-router-dom";




class App extends Component {
	render() {
		return (
			<Fragment>
			<div className = "navbar">
				<Navbar />

				</div>

				<Switch>

					<Route path="/" exact>
						<Home />
					</Route>

					<Route path="/contact" exact>
						<Contact />
					</Route>
					
				</Switch>

				<Footer />
				
			</Fragment>
		);
	}
}

export default App;
