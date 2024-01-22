import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        {/* <img src={images.seekh1} alt="G_overlay" /> */}
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            <br />
            Welcome to our home of authentic Afgan flavors, where we bring the
            rich culinary traditions of Afghanistan to Canada. Experience the
            essence of Afghan hospitality through our meticulously curated
            dishes, a true reflection of Afghanistan's culinary heritage.
            <br />
            <br />
            Our menu is a journey through Afghanistan's diverse region, offering
            the best tempting Afghan cuisine taste.
            <br />
            <br />
            We are thrilled to bring you the mouth watering taste of
            Afghanistan. Indulge in the tantalizing taste of Afghanistan,
            crafted with passion and authenticity to offer you an unforgettable
            culinary experience.
            <br />
            <br />
          </p>
          <Link to="/AboutUsMore">
            <button type="button" className="custom__button">
              Know More
            </button>
          </Link>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          {/* <img src={images.seekh1} alt="about_knife" /> */}
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            <br />
            Afghan cuisine, a blend of ancient influences, showcases the mastery
            of kabobs and tikka. These dishes originate from centuries-old
            grilling traditions, symbolizing craftsmanship and cultural
            diversity.
            <br />
            <br />
            Kabobs, born from nomadic practices, reflect meticulous preparation
            and regional variations. Tikka, with its aromatic spices, embodies
            the essence of Afghan culinary excellence.
            <br />
            <br />
            At Kabob Lounge, we're passionate about sharing the authentic taste
            of Afghan cuisine. Experience our menu, crafted to honor
            Afghanistan's rich culinary legacy.
            <br />
            <br />
            <br />
          </p>
          <Link to="/AboutUsMore">
            <button type="button" className="custom__button">
              Know More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
