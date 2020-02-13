import React from "react";

class Button extends React.Component {
  state = {
    cantidad: 0,
    montado: true
  };

  componentDidMount() {
    console.log("hizo componentDidMount");
  }

  componentDidUpdate() {
    console.log("cambio el componentDidUpdate");
    this.agregar()
  }
  componentWillUnmount() {
    console.log("cambio el componentWillUnmount");
  }

  agregar = () => {
    this.setState({
      cantidad: this.state.cantidad + 1
    });
  };

  desmontar = () => {
    this.setState({
      montado: false
    });
  };

  render() {
    return (
      <div>
        {!this.state.montado ? null :(
        <div>
        <h2>Manejo de estado y ciclo de vida</h2>
        <button onClick={this.agregar}> + </button>
        <button onClick={this.desmontar}> Desmontar </button>
        </div>

        )}
      </div>
    );
  }
}

export default Button;
