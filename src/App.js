import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHomeComponent from "./MainHomeComponent";
import About from "./pages/AboutUsMore/About";
// import Contact from "./pages/ContactUsMore/Contact";
import Menu from "./pages/MenuMore/Menu";
import "./App.css";
import ContactUs from "./pages/ContactUs/ContactUs";
import Location from "./pages/Location/Location";




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHomeComponent />} />
        <Route path="/Home" element={<MainHomeComponent />} />
        <Route path="/AboutUsMore" element={<About />} />
        <Route path="/MenuMore" element={<Menu />} />
        <Route path="/ContactUS" element={<ContactUs />} />
        <Route path="/Location" element={<Location />} />
      </Routes>
    </Router>
  );
};

export default App;
