import React from 'react';
import Card from './Card';
import '../styles/Ideas.css';

const Ideas = ({ ideas, deleteIdea }) => {
	const ideaCards = ideas.map(idea => {
		return (
			<div className="cardContainer">
				<Card
					id={idea.id}
					title={idea.title}
					description={idea.description}
					completed={idea.completed}
					key={idea.id}
					deleteIdea={deleteIdea}
				/>{' '}
			</div>
		);
	});

	return <div> {ideaCards} </div>;
};

export default Ideas;
