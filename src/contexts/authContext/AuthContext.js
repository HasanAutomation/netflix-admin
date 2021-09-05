import { createContext, useContext, useReducer } from 'react';
import authReducer from './authReducer';

const initialState = {
  user: null,
  loading: false,
  error: null,
  isLoggedIn: false,
};

export const AuthContext = createContext(initialState);

export function useAuthData() {
  const { state, dispatch } = useContext(AuthContext);

  return [state, dispatch];
}

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
