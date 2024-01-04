import React from "react";
import App from "./App";
import {
  Header,
  AboutUs,
  SpecialMenu,
  Chef,
  Intro,
  Gallery,
  FindUs,
  Footer,
} from "./container";
import { Navbar } from "./components";

const MainHomeComponent = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Intro />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default MainHomeComponent;
