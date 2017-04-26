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
      answered: '',
      showSuccessful: false,
      showUnsuccessful: false
    }
  }

  updateState(key, answer){
    const myQueries = this.state.myQueries;
    myQueries[key].answers = answer;
    this.setState({
      myQueries,
      showUnsuccessful: false
    })
  }

  handleFormSubmit(formSubmitEvent){
    const queryID = this.state.queryID;
    const username = this.context.user.email;
    const answeres = '';
    var unsuccessful = false;
    this.state.myQueries.forEach(queries => {
      if(queries.answers.length ==0) {
        unsuccessful = true;
        this.setState({
          showUnsuccessful: true
        })
      }
    });
    if(!unsuccessful){
      this.state.myQueries.forEach(queries => {
        axios.post('/answerQueries/' + queries.queriesID +
                  '/' + queries.answers);
      });
      axios.post('/answerQuery/' + queryID +
               '/' + username)
      .then(res => {
        console.log("Answer sendt");
      }); 
      this.setState({
        showSuccessful: true
      })
    }

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
       this.setState({
        myQueries: res.data,
        showUnsuccessful: false,
        showSuccessful: false
      });
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
                    return <SingleQueries key={queries.queriesID} queries={queries} queriesNumber={this.state.myQueries.indexOf(queries)} updateState={this.updateState.bind(this)} />;
                  })}
                </div>
              </ul>
            </div>
          </div>
        </div>
        </div>

        {this.state.showSuccessful ?
          <div className="form-group">
            <div className="row">
              <div className="col-xs-9">
                <p className="alert alert-success userMessage">Answer sendt.</p>
              </div>
            </div>
          </div> : null }

        {this.state.showUnsuccessful ?
          <div className="form-group">
            <div className="row">
              <div className="col-xs-9">
                <p className="alert alert-danger userMessage">You need to answer all the questions.</p>
              </div>
            </div>
          </div> : null }
        {!this.state.showSuccessful ?
        <div className="form-group">
          <button type="submit" className="btn btn-info mediumButton hCenter" onClick={this.handleFormSubmit.bind(this)}>Submit</button>
        </div> : null}
      </div>
    );
  }
}

export default SingleQuery;