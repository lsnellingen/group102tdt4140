import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Authenticated, NotAuthenticated, LoginLink } from 'react-stormpath';
import axios from 'axios';

export default class IndexPage extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    feedback: {}
  };
}

  static contextTypes = {
    user: React.PropTypes.object
  };

  componentDidMount() {
    axios.get('/api/subject')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center">
          Welcome
          { this.context.user ? ' ' + this.context.user.givenName : null }!
        </h2>
        <hr />
        <div className="jumbotron">
          <p>
            <strong>This is the example fullstack project for React, ReactRouter, Flux, Express, and Stormpath</strong>
          </p>
          <p>Ready to begin? Try these Stormpath features that are included in this example:</p>
          <ol className="lead">
            <NotAuthenticated>
              <li><Link to="/register">Registration</Link></li>
              <li><LoginLink /></li>
              <li><Link to="/forgot">Forgot Password</Link></li>
            </NotAuthenticated>
            <li><Link to="/profile">Custom Profile Data</Link></li>
          </ol>
        </div>
      </div>
    );
  }
}