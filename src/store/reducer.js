import {
	CLEAN_VALUE, GET_MOVIE_FAILURE, GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS,
	GET_MOVIES_FAILURE,
	GET_MOVIES_REQUEST,
	GET_MOVIES_SUCCESS,
	PRINT_TEXT
} from "./actions/movieActions";

const initialState = {
	movies: [],
	movie: null,
	value: '',
	error: null
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MOVIES_REQUEST:
			return {...state}
		case GET_MOVIES_SUCCESS:
			return {...state, movies: action.data};
		case GET_MOVIES_FAILURE:
			return {...state, error: action.error}
		case PRINT_TEXT:
			return {...state, value: action.value}
		case CLEAN_VALUE:
			return {...state, value: ''}
		case GET_MOVIE_REQUEST:
			return {...state}
		case GET_MOVIE_SUCCESS:
			return {...state, movie: action.data};
		case GET_MOVIE_FAILURE:
			return {...state, error: action.error}
		default:
			return state
	}
}



export default reducer;