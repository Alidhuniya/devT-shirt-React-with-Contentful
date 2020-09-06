import React, { Component, Fragment } from "react";
import logo from "../assets/devswag-logo.svg";
import "../sass/3-layout/_navbar.scss";
import "../App.scss";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
	
	

	render() {
		
		return (
			<Fragment>
			<div className = "navbar">
			<header className = "header">
			<input className="menu-btn" type="checkbox" id="menu-btn" />
					<label className="menu-icon" for="menu-btn">
						<span className="navicon"></span>
					</label>
				<div>
					<Link to = "/" ><img className = "header__logo" src= {logo} alt="logo" /> </Link>
					
				</div>

				

				<nav className = "header__nav">
					<li className = "header__navLink"><Link  to = "/">Home</Link></li>
					<li className = "header__navLink"><Link  to = "/store">Store</Link></li>
					<li className = "header__navLink"><Link  to = "/payment">Payment Option</Link></li>
					<li className = "header__navLink"><Link  to = "/contact">Contact</Link></li>
				</nav>
			</header>

			
</div>
			</Fragment>
		);
	}
}
