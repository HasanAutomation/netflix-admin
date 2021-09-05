import { createContext, useContext, useReducer } from 'react';
import movieReducer from './movieReducer';

const initialState = {
  loading: false,
  movies: [],
  error: null,
};
const MovieContext = createContext(initialState);

export const useMovieData = () => {
  const { state, dispatch } = useContext(MovieContext);
  return [state, dispatch];
};

export default function MovieContextProvider({ children }) {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
}
