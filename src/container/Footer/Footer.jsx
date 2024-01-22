import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => {
    const facebookURL =
      "https://www.facebook.com/profile.php?id=61555222799199&mibextid=ZbWKwL";
    const instagramURL =
      "https://www.instagram.com/kabobloungeca?igsh=d2Uyd2luN3F0dnp1";
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
          <h1 className="KL">KABOB LOUNGE</h1>
          <p className="p__opensans">
            &quot;The best way to find yourself is to lose yourself in the
            service of others.&quot;
          </p>
          <img
            src={images.seekh}
            className="seekh__img"
            style={{ marginTop: 15 }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook onClick={() => openApp(facebookURL)} />
            <FiInstagram onClick={() => openApp(instagramURL)} />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Sunday-Thursday:</p>
          <p className="p__opensans">12:00 pm - 10:00 pm</p>
          <p className="p__opensans">Friday-Saturday:</p>
          <p className="p__opensans">12:00 pm - 12:00 am</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">
          {" "}
          &copy; 2024 Kabob Lounge. All Rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
