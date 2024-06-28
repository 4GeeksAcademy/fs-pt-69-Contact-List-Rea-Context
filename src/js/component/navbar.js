import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-white border border-0 mb-3">
			<Link to="/">
				<span className="navbar-brand ms-3 mb-0 h1"> </span>
			</Link>
			<div className="me-3 ml-auto">
				<Link to="/AddContact">
					<button className="btn btn-primary">Add a new contact</button>
				</Link>
			</div>
		</nav>
	);
};
