import axiosOrders from "../../axiosOrders";

export const PRINT_TEXT = 'PRINT_TEXT';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';

const getMoviesSuccess = (data) => ({type: GET_MOVIES_SUCCESS, data})

export const printText = (value) => ({type: PRINT_TEXT, value})

export const getMovies = (value) => {
	return async dispatch => {
		try {
			const response = await axiosOrders.get(`search/shows?q=${value}`);
			dispatch(getMoviesSuccess(response.data))
		} catch (e) {
			console.log(e);
		}
	}
}

