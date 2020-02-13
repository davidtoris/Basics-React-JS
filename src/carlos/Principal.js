import React from 'react';

import Button from './Button';

class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      activeButton: true
    };
    this.delButton = this.delButton.bind(this);
  }

  delButton() {
    this.setState({
      activeButton: false
    });
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <div className="header">
            <h1>React JS - Aprendizaje</h1>
          </div>
          { this.state.activeButton &&  <Button delbutton={this.delButton} /> }


        </div>
      </div>
    );
  }
}

export default Principal;