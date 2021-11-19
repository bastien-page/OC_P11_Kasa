import React, { Component } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

export class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner page="about" />
        <Footer />
      </div>
    );
  }
}

export default About;
