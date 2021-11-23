import React, { Component } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import data from "../dataAbout.json";

export class About extends Component {
  render() {
    const dataAbout = data;

    return (
      <div>
        <Header />
        <Banner page="about" />
        <div className="collapseBloc">
          {dataAbout.map((menu) => (
            <Collapse title={menu.title} text={menu.text} />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}

export default About;
