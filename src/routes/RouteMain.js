import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";

const Home = lazy(() => import("../component/home/Home"));
const About = lazy(() => import("../component/about/About"));
const Contact = lazy(() => import("../component/contact/Contact"));
const Work = lazy(() => import("../component/works/Work"));
const RouteMain = () => {
  return (
    <div>
      <Router basename="/">
        <Navbar />
        <Suspense fallback={<h1>loading...</h1>}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default RouteMain;
