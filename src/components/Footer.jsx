import React, { Component } from "react";
import logo from "../medias/logoWhite.png";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <img src={logo} alt="logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
}

export default Footer;
