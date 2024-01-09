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
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;B E S T
            &nbsp; A F G H A N &nbsp; &nbsp; C U I S I N E
          </h4>
          <h3 style={subheadingStyle}>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A &nbsp; Place &nbsp; of
            &nbsp; Authentic &nbsp; Taste
          </h3>
        </div>
        <br />
        <p className="p__opensans">
          <b>
            Step into our aromatic haven and explore the rich mosaic of Afghan
            flavors. &nbsp;K A B O B &nbsp; L O U N G E &nbsp;offers a vibrant
            tapestry of aromatic spices,From the beloved kabuli pulao to
            succulent kabobs and comforting qorma stews and hand crafted Chapli
            Kabobs ,our menu showcases the essence of Afghan gastronomy. Each
            dish reflects the warmth of Afghan hospitality and a blend of
            cultural influences, inviting you to savor the authentic taste of
            this captivating cuisine
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
