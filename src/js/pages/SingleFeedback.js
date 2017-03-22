// Libs
import React, { Component } from 'react';

class SingleFeedback extends Component {

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">{this.props.feedback.course}</div>
        <div className="panel-body">
          <p>Matter of issue: {this.props.feedback.theme}</p>
        </div>
        <ul className="list-group">
          <li className="list-group-item">Positive: {this.props.feedback.positiveFeedback}</li>
          <li className="list-group-item">Negative: {this.props.feedback.negativeFeedback}</li>
          <li className="list-group-item">Rating: {this.props.feedback.grade}</li>
        </ul>
      </div>
    );
  }
}

export default SingleFeedback;
