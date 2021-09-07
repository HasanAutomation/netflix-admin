import { createContext, useContext, useReducer } from 'react';
import listReducer from './listReducer';
const initialState = {
  lists: [],
  loading: false,
  error: null,
};

const MovieContext = createContext(initialState);

export function useListData() {
  const { state, dispatch } = useContext(MovieContext);
  return [state, dispatch];
}

export default function ListContextProvider({ children }) {
  const [state, dispatch] = useReducer(listReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
}
