import React, { Component } from 'react';
import '../styles/App.css';
import Ideas from './Ideas';
import Form from './Form';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			ideas: []
		};
	}
	render() {
		return (
			<div className="app">
				<h1 className="appHeader">IdeaBox</h1>
				<Form />
				<Ideas ideas={this.state.ideas} />
			</div>
		);
	}
}

export default App;
