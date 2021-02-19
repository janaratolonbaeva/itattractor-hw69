import {GET_MOVIES_SUCCESS, PRINT_TEXT} from "./actions/movieActions";

const initialState = {
	movies: [],
	movie: {},
	value: ''
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MOVIES_SUCCESS:
			return {...state, movies: action.data};
		case PRINT_TEXT:
			return {...state, value: action.value}
		default:
			return state
	}
}



export default reducer;