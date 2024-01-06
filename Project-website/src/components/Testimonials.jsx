import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpeg";
import './Testimonials.css';
export default function Testimonials() {
  return (
    // <Section id="testimonials">
    <div className="container0">
      <div className="title">
        <h1>Our Top Sponsors</h1>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p> */}
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Light</h4>
              <span>Tropical Tarzan</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p> */}
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Norman</h4>
              <span>Osborn Corporation</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p> */}
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Vaseegaran</h4>
              <span>CEO of Vlance</span>
            </div>
          </div>
        </div>
      </div>
      {/* </Section> */}
      </div>
  );
}


