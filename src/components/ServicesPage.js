import React from "react";
import ServiceItem from "./ServiceItem";

export default class ServicesPage extends React.Component {
	services = [{
		id: 1,
		header:'Peer and Utilization Review',
		image_src: './images/collaboration.jpg',
		description: 'Our team of experienced specialists offer medical review services for a range of services including Workers Compensation, Disability, Liability, and Auto cases. We offer same day turn arounds for most cases.'
	},
	{
		id: 2,
		header: 'Act 6 PRO Plus Reviews​',
		image_src: './images/pro_plus.jpg',
		description: 'We currently offer PRO Plus review services in the Pittsburgh area. '
	},
	{
		id: 3,
		header: 'Ergonomic Consultation',
		image_src: './images/ergo_consultation.jpg',
		description: 'We provide on site job analysis and modification recommendations for all types of environments from offices to factories. We are proud to serve the greater Pittsburgh and San Diego areas.'
	}

	]

	render() {
		return (
			<div className="content">
				<h2>Services</h2>
				<p>
					Our panel of orthopedic surgeons, physician assistants, physical
					and occupational therapists, and chiropractors offer a
					comprehensive approach for medical review services.
				</p>
				{this.services.map((service) => {
					return <ServiceItem key={service.id} {...service} />
				})}
			</div>
		);
	}
};

