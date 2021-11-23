import React, { Component } from "react";
import logo from "../medias/logoRed.png";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <li>
              <NavLink className="link" to="/">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/about">
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
