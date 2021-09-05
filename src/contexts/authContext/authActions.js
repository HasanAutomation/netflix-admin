export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export const loginStart = () => ({
  type: LOGIN_START,
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const logoutAction = () => ({
  type: LOGOUT,
});
