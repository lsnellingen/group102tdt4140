// Libs
import React, { Component } from 'react';
import DeleteIcon from 'react-icons/lib/md/delete-forever';

class SingleQuestion extends Component {

removeQuestion() {
  this.props.deleteQuestion(this.props.number - 1);
}

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
              <th className="col-xs-5">Question:</th>
              <th className="col-xs-2">Type:</th>
              <th className="col-xs-2">Alternatives:</th>
              <th className="col-xs-2"></th>
            </tr>
            <tr>
              <td className="col-xs-1">{this.props.number}</td>
              <td className="col-xs-5">{this.props.question.question}</td>
              <td className="col-xs-2">{this.props.question.type}</td>
              <td className="col-xs-2">
                { this.props.question.alternatives.length > 0 ? this.props.question.alternatives.map(alternative => {
                  return <p className="removeMargin" key={alternative}>{alternative}</p>;
                }) : 'None'}
              </td>
              <th className="col-xs-2"><DeleteIcon className="onHover hCenter" size={25} onClick={this.removeQuestion.bind(this)} /></th>
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
