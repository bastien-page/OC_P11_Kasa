import React, { Component } from "react";

export class Carrousel extends Component {
  translate() {}

  addImg() {
    return (
      <div className="carrousel">
        <img
          className="carrousel__img"
          src={this.props.pictures}
          alt=""
          key={this.props.pictures}
        />
      </div>
    );
  }

  addImgWithChevron() {
    return (
      <div className="carrousel">
        {this.props.pictures.map((picture) => (
          <img className="carrousel__img" src={picture} alt="" key={picture} />
        ))}

        <svg
          className="carrousel__left"
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
            fill="white"
          />
        </svg>
        <svg
          className="carrousel__right"
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
            fill="white"
          />
        </svg>
      </div>
    );
  }

  render() {
    return this.props.pictures.length > 1
      ? this.addImgWithChevron()
      : this.addImg();
  }
}

export default Carrousel;
