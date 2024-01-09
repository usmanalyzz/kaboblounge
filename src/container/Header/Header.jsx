import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./Header.css";

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${images.BigPicture1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const wrapperInfoStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    marginRight: "20px",
    textAlign: "center", // Align text within the .app__wrapper_info to center
    padding: "20px", // Add padding for spacing
  };

  const headingStyle = {
    marginBottom: "10px", // Margin between heading and subheadings
  };

  const buttonStyle = {
    marginTop: "20px", // Margin above the button
  };
  useEffect(() => {
    const wrapperInfo = document.querySelector(".app__wrapper_info");
    wrapperInfo.style.opacity = 1;
  }, []);

    const subheadingStyle = {
      fontStyle: "italic",
      fontFamily: "'Great Vibes', cursive", // Applying Google Font
    };
  return (
    <div
      className="app__header app__wrapper section__padding"
      id="home"
      style={headerStyle}
    >
      <div className="app__wrapper_info" style={wrapperInfoStyle}>
        <div className="heading" style={headingStyle}>
          <h1 className="app__header-h1">Kabob Lounge</h1>
        </div>
        <div className="p__opensans">
          <h4>
            {" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;B E S T
            &nbsp; A F G H A N &nbsp; &nbsp; C U I S I N E
          </h4>
          <h4 style={subheadingStyle}>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A &nbsp; Place &nbsp; of
            &nbsp; Authentic &nbsp; Taste
          </h4>
        </div>
        <br />
        <p className="p__opensans">
          <b>
            {" "}
            S t e p &nbsp; &nbsp;i n t o &nbsp; &nbsp; o u r &nbsp; &nbsp;c u l
            i n a r y &nbsp; &nbsp;h a v e n &nbsp; &nbsp;a n d &nbsp; &nbsp;e m
            b a r k &nbsp; &nbsp;o n &nbsp; &nbsp;a &nbsp; &nbsp; g a s t r o n
            o m i c &nbsp; &nbsp;a d v e n t u r e &nbsp; &nbsp; w h e r e
            &nbsp; &nbsp; e v e r y &nbsp; &nbsp;b i t e &nbsp; &nbsp;t e l l s
            &nbsp; &nbsp; a &nbsp; &nbsp; s t o r y &nbsp; &nbsp; o f &nbsp;
            &nbsp; p a s s i o n &nbsp; &nbsp;a n d &nbsp; &nbsp; i n n o v a t
            i o n
          </b>
        </p>
        <br />
        <Link to="/MenuMore">
          <button type="button" className="custom__button">
            Explore Menu
          </button>
        </Link>
        <br />
      </div>
      <br />
      <br />
      <br />
      <div className="app__wrapper_links">
        <div className="food__delivery__link doorDashLink">
          <h2 className="custom__button">Order via DoorDash</h2>
          <a
            href="https://order.online/store/kabob-lounge-burlington-27561143/?hideModal=true&pickup=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="doordash" src={images.doordash} alt="DoorDash" />
          </a>
        </div>
        <br />
        <br />
        <div className="food__delivery__link uberEatsLink">
          <h2 className="custom__button">Order via UberEats</h2>
          <a
            href="https://www.ubereats.com/store/kabob-lounge/NSmHYr3LWT2VGbNcfDYZRw?diningMode=DELIVERY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="ubereats" src={images.ubereats1} alt="UberEats" />
          </a>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Header;
