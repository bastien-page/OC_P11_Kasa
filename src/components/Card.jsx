import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div className="card">
        <img className="card__img" src={this.props.img} alt="logement" />
        <p className="card__text">{this.props.title}</p>
      </div>
    );
  }
}

export default Card;
