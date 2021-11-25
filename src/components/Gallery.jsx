import React, { Component } from "react";
import Card from "./Card";
import data from "../logements.json";

export class Gallery extends Component {
  render() {
    const dataHome = data;

    return (
      <div className="gallery">
        {dataHome.map((home) => (
          <Card
            key={home.id}
            id={home.id}
            img={home.cover}
            title={home.title}
          />
        ))}
      </div>
    );
  }
}

export default Gallery;
