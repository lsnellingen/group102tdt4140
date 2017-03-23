// Libs<
import React, { Component } from 'react';
import axios from 'axios';

class SingleFeedback extends Component {

  static contextTypes = {
    user: React.PropTypes.object
  };

  handleUpvote(event){
    const upvoter = this.context.user.email;
    const feedbackID = this.props.feedback.feedbackID;

    axios.post('/upvoteFeedback/' + upvoter +
               '/' + feedbackID)
      .then(res => {
      console.log("Upvote registered");
    });
  };

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
          <div className="form-group">
            <button type="upvote" className="btn btn-primary" onClick={this.handleUpvote.bind(this)}>Upvote</button>
          </div>

        </ul>
      </div>
    );
  }
}

export default SingleFeedback;
