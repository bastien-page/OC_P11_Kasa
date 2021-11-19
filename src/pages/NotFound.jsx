import React, { Component } from "react";
import Header from "../components/Header";
import Error from "../components/Error";

export class NotFound extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Error />
      </div>
    );
  }
}

export default NotFound;
