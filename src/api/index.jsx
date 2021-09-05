import axios from 'axios';
import {
  loginError,
  loginStart,
  loginSuccess,
} from '../contexts/authContext/authActions';
const baseURL = 'http://localhost:5500/api';

const api = axios.create({ baseURL, withCredentials: true });

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const { data } = await api.post('/users/login', user);
    dispatch(loginSuccess(data?.user));
  } catch (err) {
    dispatch(loginError());
  }
};

export const getUserStats = () => api.get('/users/stats');
export const getNewUsers = () => api.get('/users?new=true');
