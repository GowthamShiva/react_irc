import React, { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import scrollreveal from "scrollreveal";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/logs/Login";
import Custom from "./components/Custom";
import Register from "./components/logs/Register";
import Register1 from "./components/Register1";
import Dest1 from "./components/dataset/dest1";
import { AuthProvider } from "./components/logs/AuthContext";

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
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register1 />} />
            <Route path='/Custom' element={<Custom />} />
            <Route path='/London' element={<Dest1 />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}
