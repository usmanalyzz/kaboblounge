import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const history = useNavigate();
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const routeChange = (path) => {
    history(path);
  };
  const navigate = useNavigate();
  const routeChangemobile = (route) => {
      navigate(route);
      setToggleMenu(false); // Close the menu after the link is clicked
  };
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.FinalLogo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a onClick={() => routeChange("/Home")}>Home</a>
        </li>
        <li className="p__opensans">
          <a onClick={() => routeChange("/AboutUsMore")}>About</a>
        </li>
        <li className="p__opensans">
          <a onClick={() => routeChange("/MenuMore")}>Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Location</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a onClick={() => routeChangemobile("/Home")}>
                  Home
                </a>
              </li>
              <li>
                <a onClick={() => routeChangemobile("/AboutUsMore")}
                >
                  About
                </a>
              </li>
              <li>
                <a onClick={() => routeChangemobile("/MenuMore")}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Location
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
