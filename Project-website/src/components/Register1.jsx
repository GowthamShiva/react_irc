import React, { useState } from 'react';
import './logs/Register1.css';
import { FaUser, FaLock, FaUnlock } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = 'http://localhost:8000/users';

// json-server --watch data.json -p 8000 (to run server)

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    // Validate using regex
    if (!USER_REGEX.test(username) || !EMAIL_REGEX.test(email) || !PWD_REGEX.test(password) || password !== confirmPassword) {
      console.log('Invalid entry');
      return;
    }
  
    try {
      // Make Axios request with correct data format
      const response = await axios.post(
        REGISTER_URL,
        {
          username: username,
          email: email,
          password: password,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
  
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      navigate('/Login  '); // Redirect on successful login

  
      // Clear form fields after successful registration
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
  
      // Redirect or perform other actions on successful registration
    } catch (err) {
      if (!err?.response) {
        console.error('No Server Response');
      } else if (err.response?.status === 409) {
        console.error('Username Taken');
      } else {
        console.error('Registration Failed:', err.message);
      }
    }
  };

  return (
    <body className='Regbody'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h3>Get Started!</h3>
          <h1>Register Now</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className='icon' />
          </div>

          <div className="input-box">
            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <IoIosMail className='icon' />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className='icon' />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <FaUnlock className='icon' />
          </div>

          <button type="submit">Sign up</button>

          <div className="register-link">
            <p>Already have an account? <Link to="/Login"><a href="#">Login</a></Link></p>
          </div>
        </form>
      </div>
    </body>
  );
};

export default Register;
