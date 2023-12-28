import React from "react";
import { Link } from "react-router-dom";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./findus.css"

const FindUs = () => {
  const facebookURL = "https://www.facebook.com/example";
  const twitterURL = "https://www.twitter.com/example";
  const instagramURL = "https://www.instagram.com/example";
  const openApp = (url) => {
    window.location.href = url;
  };
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Contact Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            1400 Plains road East, Burlington , ON, L7R 2P8
          </p>
          <p className="p__opensans">905-333-1113</p>
          <br />
          <div className="app__footer-links_icons">
            {/* Facebook Icon */}
            <FiFacebook onClick={() => openApp(facebookURL)} />
            {/* Twitter Icon */}
            <FiTwitter onClick={() => openApp(twitterURL)} />
            {/* Instagram Icon */}
            <FiInstagram onClick={() => openApp(instagramURL)} />
          </div>
          <p
            className="p__cormorant"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="finus_img" />
      </div>
    </div>
  );
};

export default FindUs;
