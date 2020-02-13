import React, { Component } from "react";

const frutas = [
  "fresa",
  "manzana",
  "sandia",
  "kiwi",
  "durazno",
  "mango",
  "piña"
];

class IterarLista extends Component {
  render() {
    return (
      <div>
        <ul>
          {frutas.map(fruta => {
            return <li>{fruta}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default IterarLista;
