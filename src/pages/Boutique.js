import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollButton from './../components/ScrollButton';

const Boutique = () => {
  return (
    <div className="boutique">
      <Navbar />
      <ScrollButton />
      <div className="headerimg"></div>
      <Footer />
    </div>
  );
};

export default Boutique;
