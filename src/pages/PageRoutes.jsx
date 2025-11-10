import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import AboutPage from "./About";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
