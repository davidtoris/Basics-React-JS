import React, { Component } from "react";

class IterarPropiedadesObjetos extends Component {
  state = {
    user: {
      name: "Gerardo Gallegos",
      country: "Mexico",
      twitter: "@luxfenix",
      youtube: "tecs.ninja"
    }
  };

  render() {
    const { user } = this.state;
    const keys = Object.keys(user);
    // => [ 'name', 'country', 'twitter' ]

    return (
      <div>
        <h3>Iterando propiedades de objetos ⭐️</h3>
        <ul>
          {keys.map((key, index) => (
            <li key={key + index}>
              <strong>{key}:</strong> {user[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default IterarPropiedadesObjetos;
