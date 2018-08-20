import React from "react";
import Link from "gatsby-link";

import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

export default () => {
  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Footer />
    </div>
  );
};
