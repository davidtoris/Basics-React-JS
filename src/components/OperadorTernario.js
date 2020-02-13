import React from "react";

class OperadorTernario extends React.Component {
  state = {
    nombre: "Fulanito"
  };
  render() {
    return (
      <div>
        {this.state.nombre === "Fulanito" ? (
          <div>hola "Entró al if"</div>
        ) : (
          <div>no te llamas fulanito "Entró al else"</div>
        )}

        {this.state.nombre === "Fulanito" && (
          <div>se cumplio la condicion </div>
        )}
      </div>
    );
  }
}

export default OperadorTernario;
