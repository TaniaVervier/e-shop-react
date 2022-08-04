import React from "react";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Navbar from "./../components/Navbar";
import Accordion from "./../components/Accordion";
import { accordionData } from "./../data/accordionData";
import ScrollButton from './../components/ScrollButton';

const Faq = () => {
  return (
    <div className="faq-page">
      <Navbar />
      <ScrollButton />
      <div className="headerimg"></div>

      <div className="faq">

        <p>Une <br/> question?</p>

        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} className="question"/>
          ))}
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Faq;
