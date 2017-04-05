// Libs
import React, { Component } from 'react';

class QueryInformation extends Component {

  static contextTypes = {
    user: React.PropTypes.object
  };


  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Query information:</h3>
        </div>
        <div className="panel-body">
          <table className="table">
            <tbody>
              <tr>
                <th>Name:</th>
                <td>{this.props.query.name}</td>
              </tr>
              <tr>
                <th>Description:</th>
                <td>{this.props.query.description}</td>
              </tr>
              <tr>
                <th>Course:</th>
                <td>{this.props.query.course}</td>
              </tr>
              <tr>
                <th>Creator:</th>
                <td>{this.context.user ? this.context.user.email : null}</td>
              </tr>
              <tr>
                <th>Number of questions:</th>
                <td>{this.props.numberOfQuestions}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default QueryInformation;
