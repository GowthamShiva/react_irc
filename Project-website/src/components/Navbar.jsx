import React, { useState } from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import './Navbar.css';
import { useAuth } from "./logs/AuthContext";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const { isLoggedIn, setLoggedIn, username } = useAuth();

  return (
    <>
      <div className="nav" style={{ margin: '20px 10px' }}>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="" />
            SInfo
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>
        
        <ul style={{marginLeft:'50px',}}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">AboutUs</a>
          </li>
          <li>
            <a href="#recommend">Categories</a>
          </li>
          <li>
            <a href="#testimonials">Top Users</a>
          </li>
          <li>
            <Link to='/Custom'>Contact</Link>
          </li>
                  </ul>
        
          {isLoggedIn ? (
            <>
              {isLoggedIn ? (
                <p style={{ borderRadius: '20px', backgroundColor: 'white', color: 'black',marginBottom:'10px',marginTop:'10px',marginLeft:'590px'}}>
                  {'Welcome, ' + username}
                </p>
              ) : ''}
              <button
                color="danger"
                onClick={() => setLoggedIn(false)}
                style={{ fontFamily: 'League Spartan, sans-serif', borderRadius: '20px',marginTop:'0px', marginLeft: 'auto' }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to={'/login'}>
              <button
                style={{ marginLeft: 'auto' }}
              >
                Login
              </button>
            </Link>
          )}
      </div>
      <div className="responsive-nav">
        <ul>
          <li>
            <a href="#home" onClick={() => setNavbarState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#recommend" onClick={() => setNavbarState(false)}>
              Places
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setNavbarState(false)}>
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
