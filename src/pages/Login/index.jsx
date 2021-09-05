import React, { useState } from 'react';
import { login } from '../../api';
import { useAuthData } from '../../contexts/authContext/AuthContext';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, dispatch] = useAuthData();

  const handleLogin = e => {
    e.preventDefault();
    console.log(email, password);
    login({ email, password }, dispatch);
  };

  return (
    <div className='login'>
      <form className='loginForm'>
        <input
          type='text'
          placeholder='email'
          className='loginInput'
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          className='loginInput'
          onChange={e => setPassword(e.target.value)}
        />
        <button className='loginButton' onClick={handleLogin}>
          Login
        </button>
        {state.loading && <h4>Logging you in...</h4>}
      </form>
    </div>
  );
}
