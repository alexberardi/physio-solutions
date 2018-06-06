import React from "react";

const ServiceImageAndDescription = (props) => {
	return (
		<div className="service-image-and-description-container">
			<img src={props.image_src}  />
			<p>
				{props.description}
			</p>
		</div>
	);
};

export default ServiceImageAndDescription;
