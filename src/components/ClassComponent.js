import React from "react";

class ClassComponent extends React.Component {
  state = {
    cantidad: 0
  };

  agregar = () => {
    this.setState({
      cantidad: this.state.cantidad + 1
    });
  };

  quitar = () => {
    this.setState({
      cantidad: this.state.cantidad - 1
    });
  };

  limpiar = () => {
    this.setState({
      cantidad: 0
    });
  };
  render() {
    return (
      <div>
        <div>Cantidad: {this.state.cantidad}</div>
        <button onClick={this.agregar}> + </button>
        <button onClick={this.quitar}> - </button>
        <button onClick={this.limpiar}> Limpiar</button>
        <hr />
      </div>
    );
  }
}

export default ClassComponent;
