// Libs
import React, { Component } from 'react';

class SingleFeedback extends Component {

  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">{this.props.feedback.course}</div>
        <div className="panel-body">
          <p><strong>Matter of issue:</strong> {this.props.feedback.theme}</p>
        </div>
        <ul className="list-group">
          <li className="list-group-item"><strong>Positive:</strong> {this.props.feedback.positiveFeedback}</li>
          <li className="list-group-item"><strong>Negative:</strong> {this.props.feedback.negativeFeedback}</li>
          <li className="list-group-item"><strong>Rating:</strong> {this.props.feedback.grade}</li>
        </ul>
      </div>
    );
  }
}

export default SingleFeedback;
