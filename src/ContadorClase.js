import React, { Component } from "react";

class ContadorClase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  render() {
    return (
      <div>
        <p>Contador {this.state.contador}</p>
        <button
          onClick={() => this.setState({ contador: this.state.contador + 1 })}
        >
          Presioname
        </button>
      </div>
    );
  }
}

export default ContadorClase;
