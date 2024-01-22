import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import "./findus.css";

const FindUs = () => {
  const facebookURL =
    "https://www.facebook.com/profile.php?id=61555222799199&mibextid=ZbWKwL";
  const instagramURL =
    "https://www.instagram.com/kabobloungeca?igsh=d2Uyd2luN3F0dnp1";
  const destinationAddress = "1400 Plains Road East, Burlington, ON, L7R 2P8";

  const openMap = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destinationAddress)}`, '_blank');
  };

  useEffect(() => {
    const map = L.map("mapHome").setView([43.3871, -79.8371], 13); // Default view (Burlington, ON)

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "",
    }).addTo(map);

    const destination = [43.3871, -79.8371]; // Destination coordinates

    // Add a marker for the destination location
    L.marker(destination).addTo(map).bindPopup(destinationAddress).openPopup();

    map.on('click', openMap); // Open Google Maps on map click
  }, []);

  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div
        className="app__wrapper_info"
        style={{ marginBottom: "3rem", backgroundColor: "transparent" }}
      >
        {/* <SubHeading title="Contact" /> */}
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            1400 Plains road East, Burlington, ON, L7R 2P8
          </p>
          <p className="p__opensans">905-333-1113</p>
          <br />
          <div className="app__footer-links_icons">
            {/* Your social media icons */}
            <FiFacebook onClick={() => (window.location.href = facebookURL)} />
            <FiInstagram
              onClick={() => (window.location.href = instagramURL)}
            />
          </div>
          <p
            className="p__cormorant"
            style={{ color: "#F1DD38", margin: "2rem 0" }}
          >
            Opening Hours
          </p>
          <p className="p__opensans">Sun - Thurs: 12:00 pm - 10:00 pm</p>
          <p className="p__opensans">Fri - Sat: 12:00 pm - 12:00 am</p>
        </div>
      </div>

      <div className="app__wrapper_img">
        {/* Leaflet map */}
        <div
          id="mapHome"
          style={{ width: "100%", height: "400px", cursor: "pointer" }}
        ></div>
      </div>
    </div>
  );
};

export default FindUs;
