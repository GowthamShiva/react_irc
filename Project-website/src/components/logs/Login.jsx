import React, { useState } from 'react';
import './Login1.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useAuth } from './AuthContext';

const USERS_URL = 'http://localhost:8000/users'; // Replace with your actual users endpoint
const LOGIN_URL = 'http://localhost:8000/login'; // Replace with your actual login endpoint

const Login = () => {

  const {setLoggedIn,setUsername} = useAuth();
  const navigate = useNavigate();

  const [username1, setUsername1] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch user data from Axios JSON server
      const usersResponse = await axios.get(USERS_URL);
      const users = usersResponse.data; // Access the "users" array

      // Check if the entered username exists
      const user = users.find((user) => user.username === username1);

      if (!user || user.password !== password) {
        setError('Invalid username or password');
        return;
      }


      // Make Axios request to login endpoint (if needed)
      // ...
      setUsername(user.username);
      setLoggedIn(true);

      navigate('/'); // Redirect on successful login

    } catch (err) {
      console.error(err);
      setError('Login failed. Please try again.');
    }
  };
  return (
    <body className='Logbody'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className='input-box'>
            <input
              type='text'
              placeholder='Username'
              value={username1}
              onChange={(e) => setUsername1(e.target.value)}
              required
            />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className='icon' />
          </div>
          {error && <p className='error'>{error}</p>}
          <button type='submit'>Login</button>

          <div className='register-link'>
            <p>
              Don't have an account?{' '}
              <Link to='/Register'>
                <a href='#'>Register now</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </body>
  );
};

export default Login;
