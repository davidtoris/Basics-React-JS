import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.isMount = true;
    this.shouldUpdate = true;
    this.didUpdate = true;

    this.state = {
      text: 'Primer texto en el boton renderizado'
    };
    console.log('El componente aun no se monta en el DOM');
  }

  componentDidMount() {
    if ( this.isMount ) {
      setTimeout(
        () => this.changeTextDidMount(),
        700
      );
    } else {
      clearTimeout(this.timeID);
    }
  }
    
  changeTextDidMount() {
    this.timeID = this.setState({
        text: 'Estado dentro de DidMount'
      });
  }

  
  componentDidUpdate() {
    if ( this.didUpdate && this.isMount ) {
      this.didUpdate = false;
      setTimeout(() => {
        this.setState({
          text: 'El componente ha sido actualizado'
        });
      }, 2000);
    } else {
      if ( this.isMount ) {
        setTimeout(() => {
          this.setState({
            text: 'Fin de la actualizacion'
          });
        }, 2000);
      }
    }
  }

  shouldComponentUpdate() {
    if ( this.shouldUpdate && this.isMount ) {
      this.shouldUpdate = false;
      setTimeout(() => {
        this.setState({
          text: 'Preparando la actualizacion!'
        });
      }, 1000 );
    }
    return true;
  }
   
  componentWillUnmount() {
    this.isMount = false;
    clearTimeout(this.timeID);
    clearInterval(this.tick);
    console.log("Desmontado desde el boton")
  }

  render() {
    return (
      <div className="step">
        <h2>Manejo de estado y ciclo de vida</h2>
        <button
        style={{ padding:'10px' }}
        onClick={this.props.delbutton}>
        {this.state.text}
        </button>
      </div>
    );
  }
}

export default Button;