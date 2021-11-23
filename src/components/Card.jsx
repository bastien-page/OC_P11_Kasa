import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Card extends Component {
  render() {
    return (
      <div className="card">
        <Link to={"/house/" + this.props.id}>
          <img className="card__img" src={this.props.img} alt="logement" />
          <p className="card__text">{this.props.title}</p>
        </Link>
      </div>
    );
  }
}

export default Card;
