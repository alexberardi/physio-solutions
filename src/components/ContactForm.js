import React from 'react';
import axios from 'axios';

export default class ContactForm extends React.Component {

	constructor(props) {
		super(props);
			this.state = {
				name: '',
				email: '',
				subject: '',
				message: '',
				success: false,
				error: false,
				errorMessages: undefined
		}
	}

	onNameChange = (e) => {
		const name = e.target.value;
		this.setState(() => ({ name }));
	}

	onEmailChange = (e) => {
		const email = e.target.value;
		this.setState(() => ({ email }));
	}

	onSubjectChange = (e) => {
		const subject = e.target.value;
		this.setState(() => ({ subject }));
	}

	onMessageChange = (e) => {
		const message = e.target.value;
		this.setState(() => ({ message }));
	}


	onSubmit = (e) => {
		e.preventDefault();

		if (this.state.name.length === 0 || this.state.email === 0 || this.state.subject === 0 || this.state.message === 0) {
			this.setState(() => ({errorMessages : 'Please fill in all fields.'}));
				return;
		}

		if (!this.validateEmail(this.state.email)) {
			errorMessages = 'Please enter a valid email address';
			return;
		}


		axios.post('/contact/email/', {
		    name: this.state.name,
		    email: this.state.email,
		    subject: this.state.subject,
		    message: this.state.message
		})
		.then(function (response) {
		  console.log(response);
		})
		.catch(function (error) {
		  console.log(error);
		});


	}

	validateEmail = (email) => {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}

	render() {
		return (
			<div className="contact-container">
				<form onSubmit={this.onSubmit}>
					<div>
						{this.state.errorMessages}
					</div>
					<input type="text" placeholder="Your Name" autoFocus value={this.state.name} onChange={this.onNameChange} />
					<input type="text" placeholder="john.doe@email.com" value={this.state.email} onChange={this.onEmailChange} />
					<input type="text" placeholder="Subject" value={this.state.subject} onChange={this.onSubjectChange} />
					<textarea placeholder="Email Body" value={this.state.message} onChange={this.onMessageChange} />
					<button onClick={(e) => {}}>
	           			Send Email
	          		</button>
	          		</form>
			</div>
			);
	}
}