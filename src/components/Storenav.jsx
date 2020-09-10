import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "../sass/3-layout/_storenav.scss";

export default class Storenav extends Component {


	render() {
		
		return (
			<Fragment>
				<header >
					<nav className = "navstore" >
						<li className = "navstore__link" >
							<NavLink
								exact
								to="/"
								activeStyle={{ background: "#6C63FF", padding: "0.7rem" }}
							>
								JS
							</NavLink>
						</li>
						<li className = "navstore__link" >
							<NavLink 
								to="/other"
								activeStyle={{ background: "#6C63FF", padding: "0.7rem" }}
							>
								
							</NavLink>
						</li>
						
					</nav>
				</header>
			</Fragment>
		);
	}
}
