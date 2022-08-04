import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "./../components/Newsletter";
import ScrollButton from "./../components/ScrollButton";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <ScrollButton />
      <div className="headerimg"></div>
      <ContactForm />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Contact;
