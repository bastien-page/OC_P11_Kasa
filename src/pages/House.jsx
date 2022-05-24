import React, { Component } from "react";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import MenuHouse from "../components/MenuHouse";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

import data from "../logements.json";
import NotFound from "./NotFound";

export class House extends Component {
  render() {
    const dataHouse = data;

    const id = window.location.pathname.substr(19);

    const home = dataHouse.find((elt) => elt.id === id);

    // If home is undefined (ID is false or not in data), redirect to Error Page
    return home === undefined ? (
      <NotFound />
    ) : (
      <>
        <Header />
        <Carrousel pictures={home.pictures} />
        <MenuHouse
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
      </>
    );
  }
}

export default House;
