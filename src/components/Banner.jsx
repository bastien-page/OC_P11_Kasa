import React, { Component } from "react";
import bannerHome from "../medias/banner.png";
import bannerAbout from "../medias/bannerAbout.png";

class Banner extends Component {
  shouldImg(props) {
    if (this.props.page === "home") {
      return bannerHome;
    } else {
      return bannerAbout;
    }
  }

  shouldMsg(props) {
    let message = "";
    if (this.props.page === "home") {
      message = "Chez vous, partout et ailleurs";
    }
    return message;
  }

  render() {
    return (
      <div className="banner">
        <img src={this.shouldImg()} alt="bannière" />
        <div className="banner__bg"></div>
        <p className="banner__message">{this.shouldMsg()}</p>
      </div>
    );
  }
}

export default Banner;
