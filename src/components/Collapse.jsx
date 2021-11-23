import React, { Component } from "react";

export class Collapse extends Component {
  constructor(props) {
    super(props);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.state = { selector: "collapse__text" };
  }

  toggleCollapse() {
    this.setState = { selector: "collapse__text" };
  }

  render() {
    return (
      <div className="collapse">
        <div className="collapse__title">
          {this.props.title}
          <button
            className="collapse__icon"
            onClick={() => {
              this.toggleCollapse();
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
        <p className={this.state.selector}>{this.props.text}</p>
      </div>
    );
  }
}

export default Collapse;
