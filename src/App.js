import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import UserList from './components/UserList';
import User from './components/User';
import CreateUser from './components/User/CreateUser';
import Login from './pages/Login';
import { useAuthData } from './contexts/authContext/AuthContext';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import useLoadingWithRefresh from './hooks/useLoadingWithRefresh';

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
