import React, { Component } from "react";
import { ReactComponent as Star } from "../medias/star.svg";

export class Rating extends Component {
  render() {
    const stars = [];
    let color = "";
    const ratingNumber = this.props.rating;

    // If Rating > index, Star is red, else Star is gray

    for (let i = 0; i < 5; i++) {
      ratingNumber > i ? (color = "#FF6060") : (color = "#E3E3E3");
      stars.push(<Star fill={color} key={i} />);
    }

    return <>{stars}</>;
  }
}

export default Rating;
