import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
	header: {
		marginBottom: '50px'
	},
	title: {
		fontSize: '20px',
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.header}>
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					TV Shows
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;