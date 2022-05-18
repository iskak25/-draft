import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Componets/About";
import Footer from "./Componets/Footer/Footer";
import Home from "./Componets/Home";
import Navibar from "./Componets/Navibar";
import Users from "./Componets/Users";

const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Navibar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<Users />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default MainRoutes;
