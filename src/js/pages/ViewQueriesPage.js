import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import axios from 'axios';

import SingleQuery from './SingleQuery';
class ViewQueriesPage extends Component {

  constructor(props) {
    super(props);
      this.state = {
        myCourses: [],
        filterOption: 'chooseCourse' ,
        query: [],
        filteredQuery: [],
        showWarning: false
      };
    }

    static contextTypes = {
      user: React.PropTypes.object
    };

    componentDidMount() {
      const currentUser = this.context.user ? this.context.user.email.toLowerCase() : 'No user';
      axios.get('/getCourses/' + currentUser)
      .then(res => {
        if(res.data[0].courses == "") {
          this.setState({
            myCourses: [],
            showWarning: true});
        } else {
          this.setState({ myCourses: res.data[0].courses.split('+') });
        }
      });
      axios.get('/getQuery/')
      .then(res => {
        this.setState({ query: res.data})
      });    
    }

    handleFiltering(event) {
      
      var course = event.target.value;
      var updatedQueryList = [];
      this.state.query.forEach(query => {
        if(query.course == course) {
          updatedQueryList.push(query);
        }
      });
      this.setState({
        filterOption: course,
        filteredQuery: updatedQueryList
       })
    }

  render() {
  	return (
  		<DocumentTitle title={`Ask query`}>
        <div className="container">
            <div className="row">
              <div className="col-xs-12">
                  <br />
                  <h3>View Queries</h3>
                  <hr />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12">
              <p>Choose the course to see queries of: </p>
              <select type="subject-selector" className="form-control" id="subject-selector" name="subject-selector" value={this.state.filterOption} onChange={this.handleFiltering.bind(this)}>
                <option value="chooseCourse">Choose course</option>
                  { this.state.myCourses.map(course => {
                    return <option key={course} value={course} >{course}</option>;
                  })}
              </select>
              <hr />
            </div>
            { this.state.filteredQuery.length > 0 ?
              <div className="col-xs-10">
                <h4>Showing queries in {this.state.filterOption}:</h4>
                <br />
              { this.state.filteredQuery.map(query => {
                return <SingleQuery key={query.queryID} query={query} />;
              })}
            </div>
            : <div className="col-xs-10">
              { this.state.filterOption == 'chooseCourse' ?
                <div>
                  {this.state.showWarning ?
                    <div className="col-xs-10 removePadding">
                      <p className="alert alert-danger userMessage">You are not registered in any courses. Go to the course page and register for courses.</p>
                    </div>
                    : <h5>Choose an option to view queries.</h5> }
                </div>
              :
                <h5>There is no queries in this course.</h5>
              }
            </div>}
          </div>
	    </DocumentTitle>
  	);
  }
}

export default ViewQueriesPage;
