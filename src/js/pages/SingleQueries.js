// Libs
import React, { Component } from 'react';
import axios from 'axios';
import UpvoteIcon from 'react-icons/lib/md/thumb-up';

class SingleQueries extends Component {

  constructor(props){
    super(props);
    this.state = {
      answer: ''
    }
  }
  handleOptionChange(field,changeEvent){
    var object = {};
    object[field] = changeEvent.target.value;

    this.setState(object);
  }

  static contextTypes = {
    user: React.PropTypes.object
  };


  render() {

    return (
      <div className="panel panel-info">
      <div className="panel-heading clearfix">
          <div className="col-xs-9 removePadding">
            <span>{this.props.queries.question}</span>
          </div>
        </div>
        <div className="panel-body removePadding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 removePadding">
              <ul className="list-group removeMargin">
                <div>
                  <li className="list-group-item"><strong>Question:</strong> {this.props.queries.question}</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}




export default SingleQueries;
