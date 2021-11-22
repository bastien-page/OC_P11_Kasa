import React, { Component } from "react";
import data from "../dataAbout.json";

export class Collapse extends Component {
  render() {
    console.log({ data });
    return (
      <div className="collapse">
        <div className="collapse__title">
          test
          <button
            className="collapse__icon"
            onClick={() => {
              console.log("click");
            }}
          >
            <svg
              width="25"
              height="15"
              viewBox="0 0 25 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <p className="collapse__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          perspiciatis magni dolores ut impedit assumenda. Soluta harum vel,
          nulla laboriosam quia rem eius facere dignissimos temporibus fugiat
          voluptatem dicta non? s fugiat laboriosam, officiis, illo, accusantium
          minima nam impedit sed earum dolorum sunt aliquid deleniti nulla.
          Autem similique ut eius in reiciendis veniam pariatur?
        </p>
      </div>
    );
  }
}

export default Collapse;
