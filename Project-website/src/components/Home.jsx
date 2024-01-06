import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Recommend from "./Recommend";
//import ScrollToTop from "./components/ScrollToTop";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Navbar from "./Navbar";
import './Home.css';

function Home(){
    return(
        <div className="Homebody">
            <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
        </div>
    );
}

export default Home;