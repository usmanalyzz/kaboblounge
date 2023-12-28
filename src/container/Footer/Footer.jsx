import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => {
    const facebookURL = "https://www.facebook.com/example";
    const twitterURL = "https://www.twitter.com/example";
    const instagramURL = "https://www.instagram.com/example";
      const openApp = (url) => {
        window.location.href = url;
      };
  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">
            1400 Plains road East, Burlington , ON, L7R 2P8
          </p>
          <p className="p__opensans">905-333-1113</p>
        </div>

        <div className="app__footer-links_logo">
          {/* <img src={images.gericht} alt="footer_logo" /> */}
          <h1 className="KL">KABOB LOUNGE</h1>
          <p className="p__opensans">
            &quot;The best way to find yourself is to lose yourself in the
            service of others.&quot;
          </p>
          <img
            src={images.spoon}
            className="spoon__img"
            style={{ marginTop: 15 }}
          />
          <div className="app__footer-links_icons">
            {/* Facebook Icon */}
            <FiFacebook onClick={() => openApp(facebookURL)} />
            {/* Twitter Icon */}
            <FiTwitter onClick={() => openApp(twitterURL)} />
            {/* Instagram Icon */}
            <FiInstagram onClick={() => openApp(instagramURL)} />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 am - 11:00 pm</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">2023 Kabob Lounge. All Rights reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
