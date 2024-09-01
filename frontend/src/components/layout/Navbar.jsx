import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="index.html">
          <img src="/images/logo.png" width="125px" alt="logo" />
        </a>
      </div>
      <nav>
        <ul id="MenuItems">
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" exact activeClassName="active">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="/cart">
        <img src="/images/cart.png" width="30px" height="30px" />
      </NavLink>
      <img src="images/menu.png" className="menu-icon" onClick="menutoggle()" />
    </div>
  );
};

export default Header;
