import React from "react";
import { Link } from "react-router-dom";
import logoRAM from "../../img/logo_RAM.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-warning mb-3">

			<div className="w-25">
				<Link to="/">
					<img className="img-fluid" src={logoRAM}/>
				</Link>
			</div>

			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>

		</nav>
	);
};
