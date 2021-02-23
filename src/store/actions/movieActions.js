import axiosMovies from "../../axiosMovies";

export const PRINT_TEXT = 'PRINT_TEXT';
export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';
export const GET_MOVIE_REQUEST = 'GET_MOVIE_REQUEST';
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
export const GET_MOVIE_FAILURE = 'GET_MOVIE_FAILURE';
export const CLEAN_VALUE = 'CLEAN_VALUE';

const getMoviesRequest = () => ({type: GET_MOVIES_REQUEST});
const getMoviesSuccess = (data) => ({type: GET_MOVIES_SUCCESS, data});
const getMoviesFailure = (error) => ({type: GET_MOVIES_FAILURE, error});
const getMovieRequest = () => ({type: GET_MOVIE_REQUEST});
const getMovieSuccess = (data) => ({type: GET_MOVIE_SUCCESS, data});
const getMovieFailure = (error) => ({type: GET_MOVIE_FAILURE, error});

export const cleanValue = (value) => ({type: CLEAN_VALUE, value});
export const printText = (value) => ({type: PRINT_TEXT, value})

export const getMovies = (value) => {
	return async dispatch => {
		try {
			dispatch(getMoviesRequest());
			const response = await axiosMovies.get(`search/shows?q=${value}`);
			dispatch(getMoviesSuccess(response.data))
		} catch (e) {
			dispatch(getMoviesFailure(e));
		}
	}
}

export const getMovie = (id) => {
	return async dispatch => {
		try {
			dispatch(getMovieRequest());
			const response = await axiosMovies.get(`/shows/${id}`);
			console.log(response.data);
			dispatch(getMovieSuccess(response.data));
		} catch (e) {
			dispatch(getMovieFailure(e));
		}
	}
}
