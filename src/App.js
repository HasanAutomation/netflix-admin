import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import UserList from './components/UserList';
import User from './components/User';
import CreateUser from './components/User/CreateUser';
import Login from './pages/Login';
import { useAuthData } from './contexts/authContext/AuthContext';
import useLoadingWithRefresh from './hooks/useLoadingWithRefresh';
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import NewMovie from './components/AddMovie';
import Lists from './components/Lists';
import List from './components/List';
import NewList from './components/NewList';

function App() {
  const { loading } = useLoadingWithRefresh();

  return loading ? (
    <h3>Loading,please wait...</h3>
  ) : (
    <BrowserRouter>
      <TopBar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <AdminRoute exact path='/'>
            <Home />
          </AdminRoute>
          <GuestRoute exact path='/login'>
            <Login />
          </GuestRoute>
          <AdminRoute exact path='/users'>
            <UserList />
          </AdminRoute>
          <AdminRoute exact path='/movies'>
            <MovieList />
          </AdminRoute>
          <AdminRoute exact path='/lists'>
            <Lists />
          </AdminRoute>
          <AdminRoute exact path='/new-movie'>
            <NewMovie />
          </AdminRoute>
          <AdminRoute exact path='/new-list'>
            <NewList />
          </AdminRoute>
          <AdminRoute exact path='/movies/:id'>
            <Movie />
          </AdminRoute>
          <AdminRoute exact path='/lists/:id'>
            <List />
          </AdminRoute>
          <AdminRoute exact path='/users/create'>
            <CreateUser />
          </AdminRoute>
          <AdminRoute exact path='/users/:id'>
            <User />
          </AdminRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const GuestRoute = ({ children, ...rest }) => {
  const [state] = useAuthData();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return state.isLoggedIn ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};

const AdminRoute = ({ children, ...rest }) => {
  const [state] = useAuthData();
  const { isLoggedIn, user } = state;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isLoggedIn && !user?.isAdmin ? (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};

export default App;
