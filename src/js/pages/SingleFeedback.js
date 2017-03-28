// Libs
import React, { Component } from 'react';
import axios from 'axios';
import { Authenticated } from 'react-stormpath';
import UpvoteIcon from 'react-icons/lib/md/thumb-up';

class SingleFeedback extends Component {

  constructor(props) {
    super(props);
      this.state = {
        status: 'reading',
        showWarning: false,
        response: props.feedback.response,
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
    if(this.state.response.length > 0) {
      this.setState({
        status: 'responded'
      })
    }
  }

  handleChange(event) {
    this.setState({
      response: event.target.value,
      showWarning: false
    })
  }

  handleClick(event) {
    if(this.state.status == 'reading') {
      this.setState({status: 'responding'})
    } else {
      if(this.state.response.length == 0) {
        this.setState({
          showWarning: true
        })
      } else {
        axios.post('/sendResponse/' + this.props.feedback.feedbackID +
                   '/' + this.state.response)
          .then(res => {
          console.log("Response sendt.");
        });
        this.setState({
          status: 'responded'
        })
      }
    }
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
              <ul className="list-group removeMargin removeStyle">
                <li className="list-group-item"><strong>Matter of issue:</strong> {this.props.feedback.theme}</li>
                <li className="list-group-item"><strong>Positive:</strong> {this.props.feedback.positiveFeedback}</li>
                <li className="list-group-item"><strong>Negative:</strong> {this.props.feedback.negativeFeedback}</li>
                <li className="list-group-item"><strong>Rating:</strong> {this.props.feedback.grade}</li>
                  {this.state.status == 'reading' ?
                    <Authenticated inGroup="Lecturer">
                      <li className="tableBorderRight"><button className="btn btn-default hCenter smallButton" onClick={this.handleClick.bind(this)} >Respond to this feedback</button></li>
                    </Authenticated>
                    : null}
                  {this.state.status == 'responding' ?
                    <Authenticated inGroup="Lecturer">
                      <li className="list-group-item"><span>Send a response on this feedback:</span>
                        <div className="row">
                          <div className="col-xs-8">
                            <input type="text" className="form-control margin10" id="question" placeholder="Your response" value={this.state.response} onChange={this.handleChange.bind(this)} />
                          </div>
                          <div className="col-xs-4">
                            <button className="btn btn-info hCenter smallButton marginTop7" onClick={this.handleClick.bind(this)}>Add response</button>
                          </div>
                          {this.state.showWarning ? <div className="col-xs-12"><p className="alert alert-danger userMessage marginButtom10">Fill in a response.</p></div> : null}
                        </div>
                      </li>
                    </Authenticated>
                   : null }
                   {this.state.status == 'responded' ?
                     <Authenticated inGroup="Lecturer">
                       <li className="list-group-item"><h3 className="removeMargin"><small>Lecturer response:</small></h3><h5><em>{this.state.response}</em></h5> </li>
                     </Authenticated>
                      : null }
                      {this.state.response.length > 0 ?
                        <Authenticated inGroup="Student">
                          <li className="list-group-item"><h3 className="removeMargin"><small>Lecturer response:</small></h3><h5><em>{this.state.response}</em></h5> </li>
                        </Authenticated>
                         : null }
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
