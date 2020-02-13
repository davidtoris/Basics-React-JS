import React from "react";

class RefsComponent extends React.Component {
  entrada = React.createRef();

  enviaBtn = () => {
    console.log(this.entrada);
    console.log("LA referencia es un input porque esta ahí la referencia");
  };

  render() {
    return (
      <div>
        <h1>Hola</h1>
        <input type="text" ref={this.entrada} />
        <button onClick={this.enviaBtn}>Manda la referencia a consola</button>
      </div>
    );
  }
}

export default RefsComponent;
