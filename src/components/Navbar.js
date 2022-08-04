import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setShow(window.pageYOffset > 50);
  };

  return (
    <div className={show ? "navbar scrolled" : "navbar"}>
      <NavLink to="/">
        <div className="logo">
          <p className={show ? "an scrolled" : "an"}>AN</p>
        </div>
      </NavLink>

      <ul>
        <NavLink to="/">
          <li className={show ? "pages scrolled" : "pages"}>Accueil</li>
        </NavLink>

        <NavLink to="/boutique">
          <li className={show ? "pages scrolled" : "pages"}>Boutique</li>
        </NavLink>

        <NavLink to="/faq">
          <li className={show ? "pages scrolled" : "pages"}>FAQ</li>
        </NavLink>

        <NavLink to="/contact">
          <li className={show ? "pages scrolled" : "pages"}>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
