import React, { Component } from 'react';
import '../styles/Form.css';

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

	submitNewIdea = e => {
		e.preventDefault();
		const newIdea = {
			...this.state,
			id: Date.now()
		};
		this.props.addIdea(newIdea);
		this.clearInputs();
	};

	clearInputs = () => {
		this.setState({
			title: '',
			description: ''
		});
	};

	render() {
		return (
			<div>
				<form className="inputForm">
					<input
						className="titleInput"
						type="text"
						placeholder="title"
						value={this.state.title}
						name="title"
						onChange={this.handleChange}
					/>{' '}
					<input
						className="desInput"
						type="text"
						placeholder="description"
						value={this.state.description}
						name="description"
						onChange={this.handleChange}
					/>
					<button className="btnSubmit" onClick={e => this.submitNewIdea(e)}>
						Submit
					</button>
				</form>{' '}
			</div>
		);
	}
}

export default Form;
