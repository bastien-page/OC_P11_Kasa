import React, { Component } from "react";
import Card from "./Card";
import data from "../dataAbout.json";

export class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Gallery;
