import React, { Component } from "react";
import { ReactComponent as Star } from "../medias/star.svg";

export class Rating extends Component {
  /*
  On colorise les étoiles suivant les notes
  A chaque tour de boucle, si la note est plus élévée que i alors on colorise l'étoile on rouge
  */

  render() {
    const stars = [];
    let color = "";
    const ratingNumber = this.props.rating;

    for (let i = 0; i < 5; i++) {
      ratingNumber > i ? (color = "#FF6060") : (color = "#E3E3E3");
      stars.push(<Star fill={color} key={i} />);
    }

    return <>{stars}</>;
  }
}

export default Rating;
