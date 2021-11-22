import React, { Component } from "react";
import logo from "../medias/logoRed.png";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">A propos</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
