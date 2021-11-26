import React, { Component } from "react";

export class Collapse extends Component {
  constructor() {
    super();

    this.state = { open: false, icon: false };
  }

  toggle() {
    this.setState({
      open: !this.state.open,
      icon: !this.state.icon,
    });
  }

  createText() {
    const element = this.props.text;
    if (typeof element === "string") {
      return element;
    } else {
      return (
        <ul>
          {element.map((elt) => (
            <li className="collapse__list" key={elt}>
              {elt}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="collapse">
        <div
          className="collapse__title"
          onClick={() => {
            this.toggle();
          }}
        >
          {this.props.title}

          <svg
            className={"collapse__icon" + (this.state.icon ? " rotate" : "")}
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
        </div>
        <p className={"collapse__text" + (this.state.open ? "" : " hidden")}>
          {this.createText()}
        </p>
      </div>
    );
  }
}

export default Collapse;
