import axios from 'axios';
import {
  loginError,
  loginStart,
  loginSuccess,
  logoutAction,
} from '../contexts/authContext/authActions';
import {
  getMovieStart,
  getMoviesSuccess,
  getMoviesError,
} from '../contexts/movieContext/movieActions';
const baseURL = 'http://localhost:5500/api';

const api = axios.create({ baseURL, withCredentials: true });

// Users
export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const { data } = await api.post('/users/login', user);
    dispatch(loginSuccess(data?.user));
  } catch (err) {
    dispatch(loginError());
  }
};

export const logout = async dispatch => {
  try {
    await api.post('/users/logout');
    dispatch(logoutAction());
  } catch (err) {
    console.log(logout);
  }
};
export const getUserStats = () => api.get('/users/stats');
export const getNewUsers = () => api.get('/users?new=true');
export const getUsers = () => api.get('/users');

// Movies
export const getMovies = async dispatch => {
  dispatch(getMovieStart());
  try {
    const { data } = await api.get('/movies');
    dispatch(getMoviesSuccess(data));
  } catch (err) {
    console.log(err);
    dispatch(getMoviesError());
  }
};
