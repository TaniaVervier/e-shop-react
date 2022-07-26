import React from "react";

const ContactForm = () => {
  return (
    <div className="form-container">
      <div className="infos">
        <h3> Téléphone </h3>
        <p> 02 374 74 74 </p>

        <h3> Email </h3>
        <p> info@nepetas.be </p>
      </div>

      <div className="contact">
        <h2 className="contact-title">Contactez-nous</h2>
        <div className="form">
          <form className="form-content">
            <label>Nom</label>
            <input
              type="text"
              name="name"
              required
              autoComplete="off"
              id="name"
              className="input"
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              id="email"
              className="input"
            />
            <label>Message</label>
            <textarea name="message" id="mess" />
            <input type="submit" value="Envoyer" className="hover button" />
          </form>
        </div>
      </div>

      <div className="formMessage"></div>
    </div>
  );
};

export default ContactForm;
