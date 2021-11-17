import React, { Component } from "react";

class Error extends Component {
  render() {
    return (
      <div className="error">
        <h2 className="error__title">404</h2>
        <p className="error__message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <p className="error__link">Retourner sur la page d’accueil</p>
      </div>
    );
  }
}

export default Error;
