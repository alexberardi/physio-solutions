import React from "react";
import ServiceImageAndDescription from "./ServiceImageAndDescription";

const ServiceItem = (props) => {
	return (
		<div className="service-item-container">
			<h2 className="service-item-container-header">{props.header}</h2>
			<ServiceImageAndDescription image_src={props.image_src} description={props.description} />
		</div>
	);
};

export default ServiceItem;
