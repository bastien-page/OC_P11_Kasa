import React, { Component } from "react";

import Star from "./Star";

export class MenuHouse extends Component {
  render() {
    const tags = this.props.tags;

    return (
      <div className="menuhome">
        <div>
          <h3 className="menuhome__title">{this.props.title}</h3>
          <p className="menuhome__location">{this.props.location}</p>
          <div className="menuhome__tags">
            {tags.map((tag) => (
              <p className="menuhome__tag" key={tag}>
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div>
          <div className="menuhome__host">
            <p className="menuhome__name"> {this.props.host.name} </p>
            <img
              className="menuhome__pp"
              src={this.props.host.picture}
              alt="utilisateur"
            />
          </div>
          <div className="menuhome__rating">
            <Star rating={this.props.rating} />
          </div>
        </div>
      </div>
    );
  }
}

export default MenuHouse;
