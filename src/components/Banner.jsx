import React, { Component } from "react";
import bannerHome from "../medias/banner.png";
import bannerAbout from "../medias/bannerAbout.png";

class Banner extends Component {
  render() {
    // Return Img & Text following page in Props

    return this.props.page === "home" ? (
      <div className="banner">
        <img src={bannerHome} alt="bannière" />
        <div className="banner__bg"></div>
        <p className="banner__message">Chez vous, partout et ailleurs</p>
      </div>
    ) : (
      <div className="banner">
        <img src={bannerAbout} alt="bannière" />
        <div className="banner__bg"></div>
        <p className="banner__message"></p>
      </div>
    );
  }
}

export default Banner;
