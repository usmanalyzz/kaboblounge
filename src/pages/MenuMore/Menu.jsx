import React, { useEffect, useState } from "react";
import { MenuItem } from "../../components";
import { data } from "../../constants";
import "./menu.css";
import { Navbar } from "../../components";
import { Footer } from "../../container";
import { images } from "../../constants";

const Menu = () => {
  const [showModal, setShowModal] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);

  const openModal = (imageSrc) => {
    setClickedImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setClickedImage(null);
  };

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
          {/* Add image for BEEF category */}
          <div className="app__menu-items">
            {data.beefs.map((beef, index) => (
              <MenuItem
                key={beef.title + index}
                title={beef.title}
                // price={beef.price}
                tags={beef.tags}
              />
            ))}
          </div>
          <div className="images">
            {/* Add image for BEEF category */}
            <div className="category-image">
              <img
                src={images.BeefTikkaDinner}
                alt="Beef Image"
                onClick={() => openModal(images.BeefTikkaDinner)}
              />
            </div>
            {/* Add image for BEEF category */}
            <div className="category-image">
              <img
                src={images.KoftaKabobSaladNaan}
                alt="Beef Image"
                onClick={() => openModal(images.KoftaKabobSaladNaan)}
              />
            </div>
            {/* Add image for BEEF category */}
            <div className="category-image">
              <img
                src={images.SultaniKabobSaladNaan}
                alt="Beef Image"
                onClick={() => openModal(images.SultaniKabobSaladNaan)}
              />
            </div>
            {/* Add image for BEEF category */}
            <div className="category-image">
              <img
                src={images.ChapleeKabobDinner}
                alt="Beef Image"
                onClick={() => openModal(images.ChapleeKabobDinner)}
              />
            </div>
          </div>
        </div>
        <div className="app__menu-category">
          <p className="app__menu-category-heading">CHICKEN</p>
          <div className="app__menu-items">
            {data.chickens.map((chicken, index) => (
              <MenuItem
                key={chicken.title + index}
                title={chicken.title}
                // price={chicken.price}
                tags={chicken.tags}
              />
            ))}
          </div>
          <div className="images">
            {/* Add image for BEEF category */}
            <div className="category-image">
              <img
                src={images.TandooriBreastKabobDinner}
                alt="Beef Image"
                onClick={() => openModal(images.TandooriBreastKabobDinner)}
              />
            </div>
            {/* Add image for BEEF category */}
            <div className="category-image">
              <img
                src={images.ChickenKoftaKabobDinner}
                alt="Beef Image"
                onClick={() => openModal(images.ChickenKoftaKabobDinner)}
              />
            </div>
            {/* Add image for BEEF category */}
            <div className="category-image">
              <img
                src={images.ChickenWhiteBreastKabobDinner}
                alt="Beef Image"
                onClick={() => openModal(images.ChickenWhiteBreastKabobDinner)}
              />
            </div>
            {/* Add image for BEEF category */}
            <div className="category-image">
              <img
                src={images.ChickenChapleeKabobDinner}
                alt="Beef Image"
                onClick={() => openModal(images.ChickenChapleeKabobDinner)}
              />
            </div>
            <div className="category-image">
              <img
                src={images.HalfChickenDinner}
                alt="Beef Image"
                onClick={() => openModal(images.HalfChickenDinner)}
              />
            </div>
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
            <div className="images">
              <div className="category-image">
                <img
                  src={images.BeefFor2}
                  alt="Beef Image"
                  onClick={() => openModal(images.BeefFor2)}
                />
              </div>
            </div>
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
          <div className="images">
            <div className="category-image">
              <img
                src={images.WazeriKabobDinner}
                alt="Beef Image"
                onClick={() => openModal(images.WazeriKabobDinner)}
              />
            </div>
            <div className="category-image">
              <img
                src={images.WazeriKabobDinner}
                alt="Beef Image"
                onClick={() => openModal(images.WazeriKabobDinner)}
              />
            </div>
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
          <div className="images">
            <div className="category-image">
              <img
                src={images.ChickenFor2}
                alt="Beef Image"
                onClick={() => openModal(images.ChickenFor2)}
              />
            </div>
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
          <div className="plattersimages">
            <div className="images">
              <div className="category-image">
                <img
                  src={images.FamilyPlatter1}
                  alt="Beef Image"
                  onClick={() => openModal(images.FamilyPlatter1)}
                />
              </div>
              <div className="category-image">
                <img
                  src={images.FamilyPlatter2}
                  alt="Beef Image"
                  onClick={() => openModal(images.FamilyPlatter2)}
                />
              </div>
            </div>
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
              {/* <div className="images">
                <div className="category-image">
                  <img src={images.beefImage} alt="Beef Image" />
                </div>
                <div className="category-image">
                  <img src={images.beefImage} alt="Beef Image" />
                </div>
                <div className="category-image">
                  <img src={images.beefImage} alt="Beef Image" />
                </div>
              </div> */}
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
            {/* <div className="images">
              <div className="category-image">
                <img src={images.pcsChickenWingsOnly8} alt="Beef Image" />
              </div>
              <div className="category-image">
                <img src={images.pcsChickenWingsOnly12} alt="Beef Image" />
              </div>
              <div className="category-image">
                <img
                  src={images.pcsChickenWingsOnlySaladNaan12}
                  alt="Beef Image"
                />
              </div>
            </div> */}
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
            <div className="images">
              <div className="category-image">
                <img
                  src={images.pcsChickenWingsOnly8}
                  alt="Beef Image"
                  onClick={() => openModal(images.pcsChickenWingsOnly8)}
                />
              </div>
              <div className="category-image">
                <img
                  src={images.pcsChickenWingsOnly12}
                  alt="Beef Image"
                  onClick={() => openModal(images.pcsChickenWingsOnly12)}
                />
              </div>
              <div className="category-image">
                <img
                  src={images.pcsChickenWingsOnlySaladNaan12}
                  alt="Beef Image"
                  onClick={() => openModal(images.FamilyPlatter2)}
                />
              </div>
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
      {/* Modal to display the enlarged image */}

      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {clickedImage && (
              <img
                src={clickedImage}
                alt="Enlarged Image"
                className="enlarged-image"
              />
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Menu;
