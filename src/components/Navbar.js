import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">
        <div className="logo">
          <p>AN</p>
        </div>
      </NavLink>

      <ul>
        <NavLink to="/">
          <li className="pages">Accueil</li>
        </NavLink>

        <NavLink to="/boutique">
          <li className="pages">Boutique</li>
        </NavLink>

        <NavLink to="/faq">
          <li className="pages">FAQ</li>
        </NavLink>

        <NavLink to="/contact">
          <li className="pages">Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
