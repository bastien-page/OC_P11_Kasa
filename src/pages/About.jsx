import React, { Component } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

export class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner page="about" />
        <Collapse />
        <Footer />
      </div>
    );
  }
}

export default About;
