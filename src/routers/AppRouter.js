import React from "react";
import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import ServicesPage from "../components/ServicesPage";
import ContactPage from "../components/ContactPage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<div>
					<Switch>
						<Route path="/" component={HomePage} exact={true} />
						<Route path="/services" component={ServicesPage} />
						<Route path="/contact" component={ContactPage} />
						<Route component={NotFoundPage} />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default AppRouter;
