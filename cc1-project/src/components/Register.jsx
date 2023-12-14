import React, { useState } from 'react';
import './Register.css';
import { FaUser,FaLock,FaUnlock} from "react-icons/fa";
import {IoIosMail} from "react-icons/io";
import { Link } from 'react-router-dom';

const Register = () => {
   return (
     <div className='wrapper'>
    <form action=""> 
     <h2>Get Started!</h2>

      <h1>Register Now</h1>
      <div className="input-box">
        <input type="text" placeholder='Username' required />
        <FaUser className='icon'/>
        </div>
        
        <div className="input-box">
          <input type="email" placeholder='Email' required />
          <IoIosMail className='icon'/>
        </div>
        
        <div className="input-box">
          <input type="password" placeholder='Password' required />
          <FaLock className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Confirm password' required />
          <FaUnlock className='icon'/>
        </div>
        <button type="submit">Sign up</button>

        <div className="register-link">
<p>Already have an account? <Link to="/"><a href="#">Login</a></Link></p>
    </div>
    </form>
            </div>
   );
};

export default Register;