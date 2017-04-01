// Libs
import React, { Component } from 'react';
import axios from 'axios';
import UpvoteIcon from 'react-icons/lib/md/thumb-up';


import SingleQueries from './SingleQueries';
class SingleQuery extends Component {

  constructor(props){
    super(props);
    this.state = {
      queryID: this.props.query.queryID,
      myQueries: [],
      answer: '',
      tAnswer: ''
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

  componentDidMount() {
      this.setState({
        queryID: this.props.query.queryID
      });
      axios.get('/getQueries/' + this.state.queryID)
      .then(res => {
        this.setState({myQueries: res.data});
      });    
    }

  componentWillReceiveProps(nextProps){
    this.setState({
      queryID: nextProps.query.queryID
    });
    axios.get('/getQueries/' + nextProps.query.queryID)
      .then(res => {
       this.setState({myQueries: res.data});
    }); 
  }

  render() {

    return (
      <div className="panel panel-info">
        <div className="panel-heading clearfix">
          <div className="col-xs-9 removePadding">
            <span>{this.props.query.name}</span>
          </div>
          <div className="col-xs-3">
            <p className="pull-right removeMargin"><small>{this.props.query.date.substring(0,10)}</small></p>
          </div>
        </div>
        <div className="panel-body removePadding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 removePadding">
              <ul className="list-group removeMargin">
                <div>
                  <li className="list-group-item"><strong>Desctiption:</strong> {this.props.query.description}</li>
                  <li className="list-group-item"><strong>Creator:</strong> {this.props.query.creator}</li>
                  { this.state.myQueries.map(queries => {
                    return <SingleQueries key={queries.queriesID} queries={queries} />;
                  })}
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




export default SingleQuery;
