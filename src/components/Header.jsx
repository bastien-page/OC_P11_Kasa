import React, { Component } from "react";
import logo from "../medias/logoRed.png";

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/">A propos</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
