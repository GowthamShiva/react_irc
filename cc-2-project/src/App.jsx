import React, { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import scrollreveal from "scrollreveal";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/logs/Login";
import Custom from "./components/Custom";
import Register from "./components/logs/Register";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/Login' element={<Login/>}/>
      <Route exact path='/Register' element={<Register/>}/>
      <Route exact path='/Custom' element={<Custom/>}/>

      </Routes>

      </BrowserRouter>
    </div>
  );
}
