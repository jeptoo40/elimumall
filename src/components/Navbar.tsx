import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />}
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><NavLink to="/items" onClick={() => setIsOpen(false)}>ITEM LIST</NavLink></li>
        <li><NavLink to="/books" onClick={() => setIsOpen(false)}>BOOKS</NavLink></li>
        <li><NavLink to="/materials" onClick={() => setIsOpen(false)}>MATERIALS</NavLink></li>
        <li><NavLink to="/about" onClick={() => setIsOpen(false)}>ART TOOLS</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>TECH TOOLS</NavLink></li>
        <li><NavLink to="/purchase" onClick={() => setIsOpen(false)}>TOOLS TO SHOP</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;