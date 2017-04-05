// Libs
import React, { Component } from 'react';
import axios from 'axios';
import UpvoteIcon from 'react-icons/lib/md/thumb-up';

class SingleFeedback extends Component {

  constructor(props) {
    super(props);
      this.state = {
        liked: false,
        likes: props.feedback.upvotes
      };
    }

  static contextTypes = {
    user: React.PropTypes.object
  };

  handleUpvote(event){
    if(!this.state.liked) {
      const upvoter = this.context.user.email;
      const feedbackID = this.props.feedback.feedbackID;

      axios.post('/upvoteFeedback/' + upvoter +
                 '/' + feedbackID)
        .then(res => {
        console.log("Upvote registered");
      });
      this.setState({
        liked: true,
        likes: this.state.likes + 1
      })
    }
  }

  componentDidMount() {
    this.setState({
      liked: this.props.feedback.upvoters.includes(this.context.user.email)
    })
  }

  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-9 removePadding">
                <span>{this.props.feedback.course}</span>
              </div>
              <div className="col-xs-3">
                <p className="pull-right removeMargin"><small>{this.props.feedback.date.substring(0,10)}</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="panel-body removePadding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-9 removePadding">
              <ul className="list-group removeMargin">
                <li className="list-group-item"><strong>Matter of issue:</strong> {this.props.feedback.theme}</li>
                <li className="list-group-item"><strong>Positive:</strong> {this.props.feedback.positiveFeedback}</li>
                <li className="list-group-item"><strong>Negative:</strong> {this.props.feedback.negativeFeedback}</li>
                <li className="list-group-item"><strong>Rating:</strong> {this.props.feedback.grade}</li>
              </ul>
            </div>
            <div className="col-xs-3">
              <div>
                <UpvoteIcon size={30} onClick={this.handleUpvote.bind(this)} className={this.state.liked ? 'text-center hCenter marginTop20 likedFeedback' : 'text-center hCenter marginTop20 fontColor onHover'}/>
                <h6 className="text-center ">{this.state.liked ? 'You liked this!' : 'Upvote feedback'}</h6>
                <hr />
                <h3 className="text-center">{this.state.likes}</h3>
                <h6 className="text-center">People have liked this feedback</h6>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default SingleFeedback;