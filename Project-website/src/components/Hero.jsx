import React from "react";
// import styled from "styled-components";
import homeImage from "../assets/hero.png";
import './Hero.css';
export default function Hero() {
  return (
    <div className="section">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>Discover more places</h1>
          <p>
            Search your desired place to know more!
          </p>
        </div>
        <div className="search">
          <div className="container">
            <input type="text" placeholder="Search Your location" />
          </div>
          {/* <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date" />
            </div>
            <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date" />
          </div> */}
          <button>Search</button>
        </div>
      </div>
          </div>
  );
}


