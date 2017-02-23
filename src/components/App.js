// Libs
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="App-content main-container">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
