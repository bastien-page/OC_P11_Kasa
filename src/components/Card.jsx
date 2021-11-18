import React, { Component } from "react";
import img from "../medias/banner.png";

export class Card extends Component {
  render() {
    return (
      <div className="card">
        <img className="card__img" src={img} alt="logement" />
        <p className="card__text">Texte</p>
      </div>
    );
  }
}

export default Card;
