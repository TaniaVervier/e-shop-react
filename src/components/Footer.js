import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialmedia">
        <p>Retrouvez-nous sur</p>
        <ul className="content">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <i className="fab fa-twitter"></i>
            </li>
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <i className="fab fa-instagram"></i>
            </li>
          </a>
        </ul>
      </div>

      <div className="footer_links">
        <ul className="firstlinks">
          <li>
            {" "}
            <a href="/"> Conditions de vente </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/"> Politique de confidentialité </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/"> Paiement sécurisé </a>{" "}
          </li>
        </ul>

        <br />

        <ul className="secondlinks">
          <NavLink to="/contact">
            {" "}
            <li> Nous contacter </li>{" "}
          </NavLink>
          <NavLink to="/faq">
            {" "}
            <li> FAQ </li>{" "}
          </NavLink>
        </ul>
      </div>

      <div class="pay">
        <ul>
          <li>
            <i class="fa-brands fa-paypal"></i>
          </li>
          <li>
            <i class="fa-brands fa-cc-mastercard"></i>
          </li>
          <li>
            <i class="fa-brands fa-cc-visa"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
