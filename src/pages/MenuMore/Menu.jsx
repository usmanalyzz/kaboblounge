import React, { useEffect } from "react";
import { MenuItem } from "../../components";
import { data } from "../../constants";
import "./menu.css";
import { Navbar } from "../../components";
import { Footer } from "../../container";

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app__menu" id="menu">
      <Navbar />
      <div className="app__menu-title">
        {/* <SubHeading title="Our Menu" /> */}
        <h1 className="headtext__cormorant">Explore Our Delicacies</h1>
      </div>

      <div className="app__menu-categories">
        <div className="app__menu-category">
          <p className="app__menu-category-heading">BEEF</p>
          <div className="app__menu-items">
            {data.beefs.map((beef, index) => (
              <MenuItem
                key={beef.title + index}
                title={beef.title}
                price={beef.price}
                tags={beef.tags}
              />
            ))}
          </div>
        </div>
        <div className="app__menu-category">
          <p className="app__menu-category-heading">CHICKEN</p>
          <div className="app__menu-items">
            {data.chickens.map((chicken, index) => (
              <MenuItem
                key={chicken.title + index}
                title={chicken.title}
                price={chicken.price}
                tags={chicken.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="app__menu-categories">
        <div className="app__menu-category">
          <p className="app__menu-category-heading">BEEF FOR 2</p>
          <div className="app__menu-items">
            {data.beeffor2.map((beeffortwo, index) => (
              <MenuItem
                key={beeffortwo.title + index}
                title={beeffortwo.title}
                price={beeffortwo.price}
                tags={beeffortwo.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__menu-category">
          <p className="app__menu-category-heading">CHICKEN AND BEEF LOVERS</p>
          <div className="app__menu-items">
            {data.chickensandbeef.map((chickensbeef, index) => (
              <MenuItem
                key={chickensbeef.title + index}
                title={chickensbeef.title}
                price={chickensbeef.price}
                tags={chickensbeef.tags}
              />
            ))}
          </div>
        </div>
        <div className="app__menu-category">
          <p className="app__menu-category-heading">CHICKEN FOR 2</p>
          <div className="app__menu-items">
            {data.chickenfor2.map((chickenfortwo, index) => (
              <MenuItem
                key={chickenfortwo.title + index}
                title={chickenfortwo.title}
                price={chickenfortwo.price}
                tags={chickenfortwo.tags}
              />
            ))}
          </div>
        </div>

        {/* Add more categories if needed */}
      </div>

      <div className="app__menu-categories">
        <div className="app__menu-category">
          <p className="app__menu-category-heading">PLATTERS</p>
          <div className="app__menu-items">
            {data.familyplatters.map((familyplatter, index) => (
              <MenuItem
                key={familyplatter.title + index}
                title={familyplatter.title}
                price={familyplatter.price}
                tags={familyplatter.tags}
              />
            ))}
          </div>
        </div>

        {/* Add more categories if needed */}
      </div>
      <div className="app__menu-categories">
        <div className="app__menu-category">
          <p className="app__menu-category-heading">KABOBIZER</p>
          <div className="kabobizer">
            <br />
            <div className="app__menu-items">
              <p className="headtext__cormorant">Beef</p>
              {data.kabobizerbeef.map((kabobizerbeefs, index) => (
                <MenuItem
                  key={kabobizerbeefs.title + index}
                  title={kabobizerbeefs.title}
                  price={kabobizerbeefs.price}
                  tags={kabobizerbeefs.tags}
                />
              ))}
            </div>

            <div className="app__menu-items">
              <p className="headtext__cormorant">Chicken</p>
              {data.kabobizerchicken.map((kabobizerchickens, index) => (
                <MenuItem
                  key={kabobizerchickens.title + index}
                  title={kabobizerchickens.title}
                  price={kabobizerchickens.price}
                  tags={kabobizerchickens.tags}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Add more categories if needed */}
      </div>

      <div className="app__menu-categories">
        <div className="app__menu-category">
          <p className="app__menu-category-heading">TANDOORI CHICKEN WINGS</p>
          <div className="kabobizer">
            <br />
            <div className="app__menu-items">
              {data.wings.map((wing, index) => (
                <MenuItem
                  key={wing.title + index}
                  title={wing.title}
                  price={wing.price}
                  tags={wing.tags}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Add more categories if needed */}
      </div>
      <div className="app__menu-categories">
        <div className="app__menu-category">
          <p className="app__menu-category-heading">CHICKEN QORMA</p>
          <div className="app__menu-items">
            {data.qorma.map((qourma, index) => (
              <MenuItem
                key={qourma.title + index}
                title={qourma.title}
                price={qourma.price}
                tags={qourma.tags}
              />
            ))}
          </div>
        </div>

        {/* Add more categories if needed */}
      </div>

      <div className="app__menu-categories">
        <div className="app__menu-category">
          <p className="app__menu-category-heading">WRAPS</p>
          <div className="app__menu-items">
            {data.wraps.map((wrap, index) => (
              <MenuItem
                key={wrap.title + index}
                title={wrap.title}
                price={wrap.price}
                tags={wrap.tags}
              />
            ))}
          </div>
        </div>

        {/* Add more categories if needed */}
      </div>
      <div className="app__menu-categories">
        <div className="app__menu-category">
          <p className="app__menu-category-heading">SIDE ORDERS</p>
          <div className="app__menu-items">
            {data.sideorders.map((sideorder, index) => (
              <MenuItem
                key={sideorder.title + index}
                title={sideorder.title}
                price={sideorder.price}
                tags={sideorder.tags}
              />
            ))}
          </div>
        </div>

        {/* Add more categories if needed */}
      </div>
      <div className="app__menu-categories">
        <div className="app__menu-category">
          <p className="app__menu-category-heading">SALADS</p>
          <div className="app__menu-items">
            {data.salads.map((salad, index) => (
              <MenuItem
                key={salad.title + index}
                title={salad.title}
                price={salad.price}
                tags={salad.tags}
              />
            ))}
          </div>
        </div>

        {/* Add more categories if needed */}
      </div>

      <div className="app__menu-categories">
        <div className="app__menu-category">
          <p className="app__menu-category-heading">SAUCES</p>
          <div className="app__menu-items">
            {data.sauces.map((sauce, index) => (
              <MenuItem
                key={sauce.title + index}
                title={sauce.title}
                price={sauce.price}
                tags={sauce.tags}
              />
            ))}
          </div>
        </div>

        {/* Add more categories if needed */}
      </div>

      <div className="app__menu-categories">
        <div className="app__menu-category">
          <p className="app__menu-category-heading">DRINKS</p>
          <div className="app__menu-items">
            {data.drinks.map((drink, index) => (
              <MenuItem
                key={drink.title + index}
                title={drink.title}
                price={drink.price}
                tags={drink.tags}
              />
            ))}
          </div>
        </div>

        {/* Add more categories if needed */}
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
