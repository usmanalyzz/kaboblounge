import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./about.css";
import { Navbar } from "../../components";
import { Footer } from "../../container";

const About = () => {
   useEffect(() => {
     window.scrollTo(0, 0); // Scroll to the top when the component mounts
   }, []);
  return (
    <div
      className="app__about app__bg flex__center"
      id="about">
      <Navbar />

      <div className="app__about-content flex__center">
        <div className="app__about-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Welcome to our culinary journey, where we celebrate the rich
            tapestry of Afghanistan's diverse cuisine. At Kabob Lounge, we take
            great pride in curating an expedition through Afghanistan's varied
            regions, meticulously selecting dishes that encapsulate the essence
            of its culinary heritage.
            <br />
            <br />
            With a profound sense of honor, we present a meticulously crafted
            menu that embodies the mouthwatering treasures and cultural richness
            of Afghan cuisine. Each dish is a testament to our dedication to
            offering an authentic and captivating dining experience.
            <br />
            <br />
            Join us in experiencing the vibrant flavors and traditional delights
            that define Afghan gastronomy. It's our privilege to share these
            culinary treasures with you and ensure an unforgettable, tasteful
            adventure.
          </p>
        </div>

        <div className="app__about-content_additional">
          <img
            src={images.gallery03}
            alt="additional_image"
            className="additional__img"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;