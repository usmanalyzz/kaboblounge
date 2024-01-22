import React, { useRef, useEffect } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
    const scrollRef = useRef(null);
    const SCROLL_SPEED = 20;
    const SCROLL_INTERVAL = 50;

    let isScrollingLeft = true;

    const scroll = (direction) => {
      const { current } = scrollRef;

      if (direction === "left") {
        current.scrollLeft -= SCROLL_SPEED;
      } else {
        current.scrollLeft += SCROLL_SPEED;
      }
    };
  const openInstagram = () => {
    window.open(
      "https://www.instagram.com/kabobloungeca?igsh=d2Uyd2luN3F0dnp1",
      "_blank"
    );
  };

  const handleArrowClick = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      isScrollingLeft = true;
    } else {
      isScrollingLeft = false;
    }
    scroll(direction);
  };

  useEffect(() => {
    const handleScroll = () => {
      const { current } = scrollRef;

      if (current) {
        if (isScrollingLeft && current.scrollLeft === 0) {
          isScrollingLeft = false;
        } else if (
          !isScrollingLeft &&
          current.scrollLeft + current.offsetWidth >= current.scrollWidth
        ) {
          isScrollingLeft = true;
        }
      }
    };

    const interval = setInterval(() => {
      if (isScrollingLeft) {
        scroll("left");
      } else {
        scroll("right");
      }
      handleScroll();
    }, SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, []);

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
            images.pcsChickenWingsSaladNaan8,
            images.pcsChickenWingsOnly8,
            images.pcsChickenWingsOnly12,
            images.pcsChickenWingsOnlySaladNaan12,
            images.BeefFor2,
            images.BeefTikkaDinner,
            images.BeefTikkaSaladNaan,
            images.ChapleeKabobDinner,
            images.ChapleeKabobSaladNaan,
            images.ChickenChapleeKabobDinner,
            images.ChickenChapleeKabobSaladNaan,
            images.ChickenFor2,
            images.ChickenKoftaKabobDinner,
            images.ChickenWhiteBreastKabobDinner,
            images.ChickenWhiteBreastKabobSaladNaan,
            images.FamilyPlatter1,
            images.FamilyPlatter2,
            images.HalfChickenDinner,
            images.KoftaKabobSaladNaan,
            images.QabuleeRiceWithRasinCarrot,
            images.SultaniKabobSaladNaan,
            images.TandooriBreastKabobDinner,
            images.TandooriBreastKabobSaladNaan,
            images.WazeriKabobDinner,
            images.WazeriKabobSaladNaan,
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
          <div
            className="gallery__arrow-icon"
            onClick={() => handleArrowClick("left")}
          >
            <BsArrowLeftShort />
          </div>
          <div
            className="gallery__arrow-icon"
            onClick={() => handleArrowClick("right")}
          >
            <BsArrowRightShort />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
