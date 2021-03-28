import React from 'react'
import { NavLink } from "react-router-dom"
import Logo from "../images/logo.png";
import "./header.css";


const Header = () => {
  return (
    <div>
      <nav className="header">
        <img
          src={Logo}
          alt='My Logo!'
          className='logo-nav'
        />
        <NavLink exact activeClassName="active" to="/">
          Home
      </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
      </NavLink>
        <NavLink activeClassName="active" to="/contact">
          Contact
      </NavLink>
      </nav>
    </div>
  )
};

export default Header;
