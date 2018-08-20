import React from "react";
import Link from "gatsby-link";

import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

export default () => {
  if (typeof window !== 'undefined' && window.location.pathname === "/about/") {
    require ("../assets/css/couch.css")
  }
  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Footer />
    </div>
  )
}
