// Libs
import React, { Component } from 'react';
import axios from 'axios';

// Components
import Topbar from './Topbar';
import Sidebar from './Sidebar';

class App extends Component {

componentDidMount() {
  axios.get('/me')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
}

  render() {
    return (
      <div className="App container">
        <div className="row">
          <Topbar />
          //<Sidebar />
          <div className="App-content main-container">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
