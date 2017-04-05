// Libs
import React, { Component } from 'react';

class SingleQuestion extends Component {


  render() {
    return (
      <div className="panel panel-info marginButtom10">
        <div className="panel-heading padding4">

        </div>
        <div className="panel-body removePadding">
        <div className="container-fluid">
        <table className="table fixedTable removeMargin">
          <tbody>
            <tr>
              <th className="col-xs-1">#</th>
              <th className="col-xs-6">Question:</th>
              <th className="col-xs-2">Type:</th>
              <th className="col-xs-3">Alternatives:</th>
            </tr>
            <tr>
              <td className="col-xs-1">{this.props.number}</td>
              <td className="col-xs-6">{this.props.question.question}</td>
              <td className="col-xs-2">{this.props.question.type}</td>
              <td className="col-xs-3">
                { this.props.question.alternatives.length > 0 ? this.props.question.alternatives.map(alternative => {
                  return <p className="removeMargin" key={alternative}>{alternative}</p>;
                }) : 'None'}
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>
      </div>
    );
  }
}




export default SingleQuestion;
