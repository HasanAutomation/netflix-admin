import axios from 'axios';
import {
  loginError,
  loginStart,
  loginSuccess,
  logoutAction,
} from '../contexts/authContext/authActions';
import {
  listError,
  listStart,
  listSuccess,
} from '../contexts/listContext/listActions';
import {
  getMovieStart,
  getMoviesSuccess,
  getMoviesError,
  deleteMovie,
} from '../contexts/movieContext/movieActions';
const baseURL = 'http://localhost:5500/api';

const api = axios.create({ baseURL, withCredentials: true });

api.interceptors.response.use(
  config => config,
  async err => {
    const originalRequest = err.config;

    if (
      err.response.status === 401 &&
      originalRequest &&
      !originalRequest.isRetry
    ) {
      originalRequest.isRetry = true;
      try {
        await axios.get('http://localhost:5500/api/users/refresh', {
          withCredentials: true,
        });
        return api.request(originalRequest);
      } catch (err) {
        console.log(err);
      }
    }
    throw err;
  }
);

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

export const createMovie = async movie => {
  try {
    const { data } = await api.post('/movies', movie);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteMovieApi = async (id, dispatch) => {
  try {
    await api.delete(`/movies/${id}`);
    dispatch(deleteMovie(id));
  } catch (err) {
    console.log(err);
  }
};

// movie lists
export const getMoviesLists = async dispatch => {
  dispatch(listStart());
  try {
    const { data } = await api.get('/movie-list');
    dispatch(listSuccess(data));
  } catch (err) {
    console.log(err);
    dispatch(listError());
  }
};

export const createMovieList = async body => {
  try {
    const { data } = await api.post('/movie-list', body);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateMovieList = async (id, body) => {
  try {
    const { data } = await api.put(`/movie-list/${id}`, body);
    return data;
  } catch (er) {
    console.log(er);
  }
};
