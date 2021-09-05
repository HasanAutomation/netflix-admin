import { LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS, LOGOUT } from './authActions';

export default function authReducer(state, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        user: null,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        isLoggedIn: true,
        error: null,
      };
    case LOGIN_ERROR:
      return {
        loading: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
