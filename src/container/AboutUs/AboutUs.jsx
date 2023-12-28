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
        <img src={images.KL} alt="G_overlay" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Welcome to our home of authentic Afgan flavors, where we bring the
            rich culinary traditions of Afghanistan to Canada.
            <br />
            <br />
            Our menu is a journey through Afghanistan's diverse region, offering
            the best tempting Afghan cuisine taste.
            <br />
            <br />
            We are thrilled to bring you the mouth watering taste of Afghanistan
          </p>
          <Link to="/AboutUsMore">
            <button type="button" className="custom__button">
              Know More
            </button>
          </Link>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            We embarked on a flavorful odyssey to bring the vibrant culinary
            heritage of Afghanistan to your table.
            <br />
            <br />
            Our menu is an expedition through Afghanistan's diverse regions,
            curated to offer the most enticing taste of Afghan cuisine.
            <br />
            <br />
            Thrilled and honored, we take immense pride in presenting the
            mouthwatering essence of Afghanistan's culinary treasures to you.
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
