import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from './../components/Newsletter';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="headerimg"></div>
            <ContactForm />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Contact;