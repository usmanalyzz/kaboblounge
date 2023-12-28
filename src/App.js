import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHomeComponent from "./MainHomeComponent";
import About from "./pages/AboutUsMore/About";
// import Contact from "./pages/ContactUsMore/Contact";
import Menu from "./pages/MenuMore/Menu";
import "./App.css";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHomeComponent />} />
        <Route path="/Home" element={<MainHomeComponent />} />
        <Route path="/AboutUsMore" element={<About />} />
        <Route path="/MenuMore" element={<Menu />} />
      </Routes>
    </Router>
  );
};

export default App;
