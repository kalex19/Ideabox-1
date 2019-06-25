import React from 'react';
import '../styles/Card.css';

const Card = ({ title, description, id, deleteIdea }) => {
	return (
		<section>
			<h1 className="title">{title}</h1>
			<p className="description">{description}</p>
			<button className="deleteBtn" onClick={() => deleteIdea(id)}>
				🗑
			</button>
		</section>
	);
};

export default Card;
