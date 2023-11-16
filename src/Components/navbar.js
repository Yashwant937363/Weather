import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink, Outlet } from "react-router-dom"; // Import NavLink from React Router
import './navbar.css';

function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  
  const handleNavlinkClick = () => {
    setIsMenuOpen(false);
  }
  return (
    <>
      <header>
        <style>
          {`
          #list{
            display:${isMenuOpen ? 'block' : 'none'};
          }
          @media (min-width: 500px){
            #list{
              display:inline-flex;
            }
          }
        `}
        </style>
        <nav className="navbar">
          <h1 className="title">{props.title}</h1>
          <ul id="list" onClick={handleNavlinkClick}>
            <li>
              <NavLink onClick={handleNavlinkClick} className="link" to="/"><span>Home</span></NavLink>
            </li>
            <li>
              <NavLink onClick={handleNavlinkClick} className="link" to="/about"><span>About</span></NavLink>
            </li>
          </ul>
          <div className="icons">
            <label htmlFor="togglemenu" onClick={handleMenuToggle}>
              <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} icon`} id="menu"></i>
            </label>
            <input type="checkbox" id="togglemenu" checked={isMenuOpen} readOnly />
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
