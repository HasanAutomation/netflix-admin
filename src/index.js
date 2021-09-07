import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from './contexts/authContext/AuthContext';
import ListContextProvider from './contexts/listContext/ListContext';
import MovieContextProvider from './contexts/movieContext/MovieContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <App />
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
