import React, { Component } from 'react';

class Form extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			description: ''
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.submitForm}>
					<input type="text" placeholder="title" value={this.state.title} name="title" onChange={this.handleChange} />
					<input
						type="text"
						placeholder="description"
						value={this.state.description}
						name="description"
						onChange={this.handleChange}
					/>
				</form>
			</div>
		);
	}
}

export default Form;
