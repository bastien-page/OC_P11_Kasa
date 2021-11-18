import React, { Component } from "react";
import "../styles/main.scss";
import Header from "../components/Header";
import Banner from "../components/Banner";

import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default Home;
