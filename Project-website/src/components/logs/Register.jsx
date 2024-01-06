import React, { useState } from 'react';
import './Register1.css';
import { FaUser,FaLock,FaUnlock} from "react-icons/fa";
import {IoIosMail} from "react-icons/io";
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';

const Register = () => {
   return (
    <body className='Regbody'>
     <div className='wrapper'>
    <form action=""> 
     <h3>Get Started!</h3>

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
        <Link to = '/Login'><button type="submit">Sign up</button></Link>

        <div className="register-link">
<p>Already have an account? <Link to="/Login"><a href="#">Login</a></Link></p>
    </div>
    </form>
            </div>
    </body>
   );
};

export default Register;