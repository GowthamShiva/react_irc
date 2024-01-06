import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import './Services.css';

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Why SINFO?",
      subTitle:
        "Experience the feel of discovering new places and others experience for free.",
    },
    {
      icon: service2,
      title: "Audience Safe",
      subTitle:
        "The content is checked throughly before publishing to the audience.",
    },
    {
      icon: service3,
      title: "Catergorized ",
      subTitle:
        " Find places as per your desired categories.",
    },
    {
      icon: service4,
      title: "Build community",
      subTitle:
        "Find people with same interests.",
    },
  ];
  return (
    // <Section id="services">
    <div className="container1">
      {data.map((service, index) => {
        return (
          <div className="service1">
            {/* <div className="icon">
              <img src={service.icon} alt="" />
            </div> */}
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    {/* </Section> */}
    </div>
  );
}

