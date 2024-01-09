import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const openInstagram = () => {
    window.open(
      "https://www.instagram.com/kabobloungeca?igsh=d2Uyd2luN3F0dnp1",
      "_blank"
    );
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "white", marginTop: "2rem" }}
        >
          Welcome to Kabob Lounge's Visual Feast! Explore our gallery and savor
          the vibrant array of Afghan culinary delights awaiting you. From
          sizzling kabobs to tantalizing tikkah, immerse yourself in a visual
          journey showcasing our passionately crafted dishes and the inviting
          ambiance of our restaurant. Each image captures the essence of our
          culinary artistry, inviting you to experience the authentic flavors
          and warm hospitality that define Kabob Lounge. Join us and indulge in
          an unforgettable dining experience filled with tradition, flavor, and
          joy!
        </p>
        <button
          type="button"
          className="custom__button__gallery"
          onClick={openInstagram}
        >
          View More on Instagram
        </button>
      </div>
      <div className="app__gallery-images">
        <div
          className="app__gallery-images_container"
          ref={scrollRef}
          onClick={openInstagram}
        >
          {[
            images.HalfChickenDinner,
            images.BeefTikkaDinner,
            images.SultaniKabobSaladNaan,
            images.pcsChickenWingsOnly8,
          ].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
