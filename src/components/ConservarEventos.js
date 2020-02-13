import React from "react";

class ConservarEventos extends React.Component {
  state = {
    color: "blue"
  };

  // UNA FORMA DE CAMBIAR EL STATE
  // handChange = e => {
  //   this.setState({
  //     color: e.target.value
  //   });
  // };

  // CAMBIAR EL STATE SIN AFECTAR OTROS COMPONENTES
  handChange = event => {
    console.log(event.target.value);
    // para persistir el evento usas event.persist() o se almacena a una variable
    // en este caso lo almacenamos en la variable

    const color = event.target.value;
    this.setState(state => ({
      color: color
    }));
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handChange} />
        <h2 style={{ color: this.state.color }}>{this.state.color}</h2>
      </div>
    );
  }
}

export default ConservarEventos;
