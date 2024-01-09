import React, { useState } from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (email === "") {
      setMessage("Please enter your email first");
    } else {
      // Assuming an API call or subscription logic here
      // For this example, just setting a success message
      setMessage("Successfully subscribed!");
      setEmail(""); // Clear the input field after successful subscription
    }
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="button"
          className="custom__button__news"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
      <div className="subscribe">{message && <p>{message}</p>}</div>
    </div>
  );
};

export default Newsletter;
