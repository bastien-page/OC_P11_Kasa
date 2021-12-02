import React, { Component } from "react";

export class Carrousel extends Component {
  constructor() {
    super();
    this.state = { index: 0 };
  }

  next() {
    this.state.index === this.props.pictures.length - 1 // If end of array, index is 0, else index ++
      ? this.setState({ index: 0 })
      : this.setState({ index: this.state.index + 1 });
  }

  prev() {
    this.state.index === 0 // If start of array, index is end of array, else index --
      ? this.setState({ index: this.props.pictures.length - 1 })
      : this.setState({ index: this.state.index - 1 });
  }

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
        <img
          className="carrousel__img"
          src={this.props.pictures[this.state.index]}
          alt=""
        />

        <svg
          onClick={() => this.prev()}
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
          onClick={() => this.next()}
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
    // If only 1 Img, return Img, else return Img with Chevron
    return this.props.pictures.length > 1
      ? this.addImgWithChevron()
      : this.addImg();
  }
}

export default Carrousel;
