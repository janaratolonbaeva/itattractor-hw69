import React, {useEffect} from 'react';
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {getMovie} from "../../store/actions/movieActions";


const useStyle = makeStyles(() => ({
	root: {
		display: 'flex'
	},
	content: {
		width: 'calc(100% - 400px)',
		padding: '20px 0 20px 20px'
	},
	cover: {
		width: '400px',
		height: '600px'
	}
}));

const Movie = ({match}) => {
	const dispatch = useDispatch();
	const movie = useSelector(state => state.movie)
	const id = match.params.id;
	const classes = useStyle();

	useEffect(() => {
		dispatch(getMovie(id));
	}, [id]);

	return (
		movie ? <Card className={classes.root}>
			<CardMedia
				className={classes.cover}
				image={movie.image.original}
				title="Show TV"
			/>
			<CardContent className={classes.content}>
				<Typography component="h5" variant="h5">
					{movie.name}
				</Typography>
				<Typography variant="subtitle1" color="textPrimary">
					{movie.genres}
				</Typography>
				<Typography color="textSecondary">
					{movie.summary}
				</Typography>
			</CardContent>
		</Card> : <div>NO DATA</div>
	);
};

export default Movie;