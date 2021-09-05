import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import UserList from './components/UserList';
import User from './components/User';
import CreateUser from './components/User/CreateUser';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/users'>
            <UserList />
          </Route>
          <Route exact path='/users/create'>
            <CreateUser />
          </Route>
          <Route exact path='/users/:id'>
            <User />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
