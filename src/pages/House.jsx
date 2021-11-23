import React, { Component } from "react";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import MenuHome from "../components/MenuHome";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

import data from "../logements.json";

export class House extends Component {
  render() {
    const dataHouse = data;
    const id = window.location.pathname.substr(7);

    const home = dataHouse.find((elt) => elt.id === id);

    return (
      <div>
        <Header />
        <Carrousel />
        <MenuHome
          title={home.title}
          location={home.location}
          tags={home.tags}
          rating={home.rating}
          host={home.host}
        />
        <div className="collapseHouseBloc">
          <Collapse text={home.description} title="Description" />
          <Collapse text={home.equipments} title="Équipements" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default House;
