// Libs
import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Authenticated, NotAuthenticated, LoginLink } from 'react-stormpath';
import axios from 'axios';

// Components
import Logo from '../svg/Logo';

export default class IndexPage extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        feedback: []
      };
    }

  static contextTypes = {
    user: React.PropTypes.object
  };

  componentDidMount() {
    axios.get('/api/subject')
    .then(res => {
      this.setState({ feedback: res.data });
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
        <div className="row">
          <div className="jumbotron col-xs-12">
            <span className="text-center inline"><big>LEGG INN EN STOR FIN OVERSIKT HER OM HVA EDUBOT ER, HVA DEN GJØR, HVORFOR BRUKE DEN OSV</big></span>
          </div>

          <Authenticated>
            <div className="col-xs-6 col-xs-offset-6">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h3 className="panel-title">User information:</h3>
                </div>
                <div className="panel-body">
                  <ul className="list-group">

                  </ul>
                </div>
              </div>
            </div>
          </Authenticated>

          <NotAuthenticated className="notAuthenticated">
            <div className="col-xs-7">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h4 className="text-center">Get started!</h4>
                </div>
                <div className="panel-body">
                  <h5>Start sending feedback to your lecturers, right away!</h5>
                  <p><em>
                    Create a user, sign up for courses and send feedback
                  </em></p>
                <Link to="/register"><button className="btn btn-default">REGISTER</button></Link>
                </div>
              </div>
            </div>
            <div className="col-xs-5">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h4 className="text-center">Already have a user?</h4>
                </div>
                <div className="panel-body">
                  <p>Let your lecturers know what you think, logg in and start sending feedback now.</p>
                  <Link to="/login"><button className="btn btn-default">LOGG INN</button></Link>
                </div>
              </div>
            </div>
          </NotAuthenticated>

        </div>
      </div>
    );
  }
}
