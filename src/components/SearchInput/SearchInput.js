import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {makeStyles} from "@material-ui/core/styles";
import {cleanValue, printText} from "../../store/actions/movieActions";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from '../../store/actions/movieActions';
import {NavLink} from "react-router-dom";

const useStyle = makeStyles({
	root: {
		marginBottom: '50px'
	},
	autocompleteParent: {
		position: 'relative'
	},
	autocomplete: {
		position: 'absolute',
		top: 'auto',
		left: '0',
		width: '100%',
		bottom: 'auto',
		marginTop: '10px'
	},
	list: {
		padding: '0'
	},
	listItem: {
		cursor: 'pointer',
		padding: '10px 20px'
	}
})

const SearchInput = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state);
	const classes = useStyle();

	useEffect(() => {
		dispatch(getMovies(state.value));
	}, [state.value]);

	const inputHandler = e => {
		dispatch(printText(e.target.value))
	}

	const deleteValue = () => {
		dispatch(cleanValue(state.value))
	}

	return (
		<Grid container alignItems="center" className={classes.root}>
			<Grid item xs={4}>
				<Typography>Search for TV Show: </Typography>
			</Grid>
			<Grid item xs={8} className={classes.autocompleteParent}>
				<TextField value={state.value}
									 variant="outlined"
									 fullWidth
									 onChange={inputHandler}
				/>
				<Paper className={classes.autocomplete}>
					<List className={classes.list}>
						{state.movies.map((item, index) => {
							return (
								<ListItem key={index} className={classes.listItem}>
									<NavLink to={`/shows/` + item.show.id}
													 onClick={deleteValue}
									>
										{item.show.name}
									</NavLink>
								</ListItem>
							)
						})}
					</List>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default SearchInput;