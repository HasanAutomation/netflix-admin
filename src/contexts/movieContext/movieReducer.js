import {
  DELETE_MOVIE,
  GET_ALL_MOVIES_ERROR,
  GET_ALL_MOVIES_START,
  GET_ALL_MOVIES_SUCCESS,
} from './movieActions';

export default function movieReducer(state, action) {
  switch (action.type) {
    case GET_ALL_MOVIES_START:
      return {
        loading: true,
      };
    case GET_ALL_MOVIES_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
      };
    case DELETE_MOVIE:
      console.log('changed state');
      return {
        ...state,
        movies: state.movies.filter(movie => movie._id !== action.payload),
      };
    case GET_ALL_MOVIES_ERROR:
      return {
        loading: false,
        movies: [],
      };
  }
}
