import React, { Component, Fragment } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import { Route, Switch } from "react-router-dom";
import Store from './components/Store';
import Payment from './components/Payment';




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

					<Route path="/store" exact>
						<Store />
					</Route>

					<Route path="/payment" exact>
						<Payment />
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
