import React, { Component, Fragment } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import { Route, Switch } from "react-router-dom";
import Payment from './components/Payment';
import Storepage from './pages/Storepage';


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

					<Route path="/store" >
					<div>
						<Storepage />
						</div>
						
					</Route>

					
					<Route path="/payment" >
						<Payment />
					</Route>

					<Route path="/contact" >
						<Contact />
					</Route>
					
				</Switch>

				<Footer />

			</Fragment>
		);
	}
}

export default App;
