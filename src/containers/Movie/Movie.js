import React from 'react';

const Movie = (props) => {
	const id = props.match.params.id;
	return (
		<div>
			Movie
		</div>
	);
};

export default Movie;