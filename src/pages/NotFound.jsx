import React, { Component } from "react";
import Header from "../components/Header";
import Error from "../components/Error";

export class NotFound extends Component {
  render() {
    return (
      <>
        <Header />
        <Error />
      </>
    );
  }
}

export default NotFound;
