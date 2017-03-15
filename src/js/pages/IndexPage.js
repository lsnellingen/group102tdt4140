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
    const courses = this.context.user ? this.context.user.customData.courses : ["Du har ingen emner"]
    return (
      <div className="container">
        { this.context.user ? console.log(this.context.user.customData.courses) : null }
        <h2 className="text-center">
          Velkommen
          { this.context.user ? ' ' + this.context.user.givenName : null }!
        </h2>
        <hr />
        <div className="row">
          <div className="jumbotron col-xs-12">
            <span className="text-center inline"><big>LEGG INN EN STOR FIN OVERSIKT HER OM HVA EDUBOT ER, HVA DEN GJØR, HVORFOR BRUKE DEN OSV</big></span>
          </div>

          <Authenticated>
            <div className="col-xs-6 col-xs-offset-6">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Informasjon</h3>
                </div>
                <div className="panel-body">
                  <h4>Dine emner:</h4>
                  <br></br>
                  <ul className="list-group">
                    { courses.map(function(course){
                      return <li key={course} className="list-group-item">{course}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </Authenticated>

          <NotAuthenticated className="notAuthenticated">
            <div className="col-xs-7">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="text-center">Kom i gang!</h4>
                </div>
                <div className="panel-body">
                  <h5>Start med å sende tilbakemeldinger med en gang!</h5>
                  <p><em>
                    Lag deg en bruker, registrer deg for emner og send tilbakemelding
                  </em></p>
                  <Link to="/register"><button className="btn btn-default">REGISTRER DEG</button></Link>
                </div>
              </div>
            </div>
            <div className="col-xs-5">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="text-center">Allerede bruker?</h4>
                </div>
                <div className="panel-body">
                  <p>La foreleserene dine få høre hva du mener, logg inn nå for å sende tilbakemeldinger.</p>
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
