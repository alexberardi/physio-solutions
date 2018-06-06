import React from "react";
import { Link, NavLink } from "react-router-dom";
import MainLogo from "./MainLogo";

const Header = () => {
	return (
		<header className="header">
			<div className="content-container">
				<div className="logo-container">
					<Link className="header__title" to="/">
						<MainLogo
							path="./images/logo_transparent.png"
							alt="main-logo"
						/>
					</Link>
				</div>
				<div className="header-links">
					<NavLink to="/" className="header-link" exact={true}>
						<div>Home</div>
					</NavLink>
					<NavLink
						to="/services"
						className="header-link"
						activeStyle={{
							background: "#f7f7f7",
							color: "#262796",
							fontWeight: "bold"
						}}
					>
						Services
					</NavLink>
					<NavLink
						to="/contact"
						className="header-link"
						activeStyle={{
							background: "#f7f7f7",
							color: "#262796",
							fontWeight: "bold"
						}}
					>
						Contact
					</NavLink>
				</div>
			</div>
		</header>
	);
};

export default Header;
