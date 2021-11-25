import React, { Component } from "react";

export class Star extends Component {
  calcStar() {
    let i = 0;
    let rating = [];
    while (i < this.props.rating) {
      i++;
      rating.push("red");
    }
    while (rating.length < 5) rating.push("grey");
    return rating;
  }

  render() {
    return (
      <div>
        {this.calcStar().map((rating) => (
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
              fill={rating === "red" ? "#ff6060" : "#E3E3E3"}
            />
          </svg>
        ))}
      </div>
    );
  }
}

export default Star;
