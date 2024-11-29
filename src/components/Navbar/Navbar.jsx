import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = ({ cartCount, setShowLogin, scrollToSection }) => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation(); // Get the current route

  // Check if the current route is "/product-view/:id"
  const shouldHideMenu = location.pathname.startsWith("/product-view");

  const handleNavClick = (section) => {
    setMenu(section);
    scrollToSection(section); // Scroll to the respective section
    setIsMenuOpen(false); // Close the menu after clicking on an item
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="logo" />
        </Link>

        <div
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Conditionally render the <ul> menu */}
        {!shouldHideMenu && (
          <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
            <li
              onClick={() => handleNavClick("home")}
              className={menu === "home" ? "active" : ""}
            >
              Home
            </li>
            <li
              onClick={() => handleNavClick("products")}
              className={menu === "products" ? "active" : ""}
            >
              Products
            </li>
            <li
              onClick={() => handleNavClick("about")}
              className={menu === "about" ? "active" : ""}
            >
              About Us
            </li>
            <li
              onClick={() => handleNavClick("contact-us")}
              className={menu === "contact-us" ? "active" : ""}
            >
              Contact Us
            </li>
          </ul>
        )}

        <div className="navbar-right">
          <div className="navbar-search-icon">
            <button className="basket">
            <img src={assets.basket_icon} alt="Basket Icon" />
            </button>
            {cartCount > 0 && <div className="dot">{cartCount}</div>} {/* Show notification dot */}
          </div>
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
