export const GET_ALL_MOVIES_START = 'GET_ALL_MOVIES_START';
export const GET_ALL_MOVIES_SUCCESS = 'GET_ALL_MOVIES_SUCCESS';
export const GET_ALL_MOVIES_ERROR = 'GET_ALL_MOVIES_ERROR';

export const getMovieStart = () => ({
  type: GET_ALL_MOVIES_START,
});

export const getMoviesSuccess = movies => ({
  type: GET_ALL_MOVIES_SUCCESS,
  payload: movies,
});

export const getMoviesError = () => ({
  type: GET_ALL_MOVIES_ERROR,
});
