import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";
import { Link } from "react-router-dom";

<button
          type="button"
          className="custom__button"
          style={{ marginTop: "2rem" }}
        >
          Visit Us
        </button>

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_kabob_tikkah  flex__center">
          <p className="app__specialMenu-menu_heading">KABOB & TIKKAH</p>
          <div className="app__specialMenu_menu_items">
            {data.kabob_tikkahs.map((kabob_tikkah, index) => (
              <MenuItem
                key={kabob_tikkah.title + index}
                title={kabob_tikkah.title}
                // price={kabob_tikkah.price}
                tags={kabob_tikkah.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.Kb} alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_platters  flex__center">
          <p className="app__specialMenu-menu_heading">PLATTERS</p>
          <div className="app__specialMenu_menu_items">
            {data.platters.map((platter, index) => (
              <MenuItem
                key={platter.title + index}
                title={platter.title}
                // price={platter.price}
                tags={platter.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <Link to="/MenuMore">
          <button type="button" className="custom__button__menu">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};
export default SpecialMenu;
