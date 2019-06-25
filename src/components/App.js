import React, { Component } from 'react';
import '../styles/App.css';
import Ideas from './Ideas';
import Form from './Form';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			ideas: [
				{ id: 1, title: 'Idea 1', description: 'Genius Idea 1', completed: false },
				{ id: 2, title: 'Idea 2', description: 'Genius Idea 2', completed: false },
				{ id: 3, title: 'Idea 3', description: 'Genius Idea 3', completed: false }
			]
		};
	}

	addIdea = newIdea => {
		this.setState({
			ideas: [ ...this.state.ideas, newIdea ]
		});
	};

	deleteIdea = id => {
		const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);

		this.setState({
			ideas: filteredIdeas
		});
	};

	render() {
		return (
			<div className="app">
				<h1 className="appHeader">IdeaBox</h1>
				<Form addIdea={this.addIdea} />
				<Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
			</div>
		);
	}
}

export default App;
