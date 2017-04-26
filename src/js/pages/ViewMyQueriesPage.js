import React from 'react'
import DocumentTitle from 'react-document-title';
import axios from 'axios';

import SingleMyQuery from './SingleMyQuery';
class viewMyQueriesPage extends React.Component{

	constructor(props) {
	    super(props);
	      this.state = {
	      	myCourses: [],
	      	noCourses: false,
	      	myQueries: [],
	      	noQueries: false,
	      	filterOption: 'chooseCourse',
	      	selectedQuery: 'chooseQuery'
	      };
    }

    static contextTypes = {
      user: React.PropTypes.object
    };

    componentDidMount() {
    	const currentUser = this.context.user.email;
	    axios.get('/getCourses/' + currentUser)
	    .then(res => {
	      if(res.data[0].courses == "") {
	        this.setState({
	          myCourses: [],
	          noCourses: true});
	      } else {
	        this.setState({ myCourses: res.data[0].courses.split('+') });
	      }
	    });
    	axios.get('/getMyQueries/' + currentUser)
	    .then(res => {
	      if(res.data[0].length == 0) {
	      	this.setState({
	      		myQueries: [],
	      		noQueries: true
	      	});
	      } else{
	     	  this.setState({myQueries: res.data});
	      }
	    });
    }

    handleFiltering(event) {
      var course = event.target.value;
      var updatedQueriesList = [];
      this.state.myQueries.forEach(query => {
        if(query.course == course) {
          updatedQueriesList.push(query);
        }
      });
      if (updatedQueriesList.length > 0){
      	this.setState({
	        filterOption: course,
	        myQueries: updatedQueriesList,
	        noQueries: false,
	      	selectedQuery: 'chooseQuery'
	       })
      } else {
      	this.setState({
      		filterOption: course,
      		noQueries: true,
	      	selectedQuery: 'chooseQuery'
      	});
      }
    }

    handleQueryFiltering(event){
    	const targetedQuery = event.target.value;
    	this.setState({
    		selectedQuery: targetedQuery
    	})
    }

	render(){
		return (
	      <DocumentTitle title={`View queries`}>
	        <div className="container">
	            <div className="row">
	              <div className="col-xs-12">
	                  <br />
	                  <h3>My Queries</h3>
	                  <hr />
	              </div>
	            </div>
	            <div className="col-xs-12 col-sm-12">
	              <p>Choose a course to choose query: </p>
	              <select type="course-selector" className="form-control" id="course-selector" name="course-selector" value={this.state.filterOption} onChange={this.handleFiltering.bind(this)}>
	                <option value="chooseCourse">Choose course</option>
	                { this.state.myCourses.map(course => {
                    return <option key={course} value={course} >{course}</option>;
                  })}
	              </select>
	              <hr />
	            </div>
	            { this.state.filterOption !== 'chooseCourse' ?
	            	<div>
			            { this.state.noQueries ?
			           	  <div className="col-xs-12 col-sm-12">
			            		<h5>You have no queries in this course.</h5>
			              </div>
			            :<div className="col-xs-12 col-sm-12">
			              <p>Choose a query to see results: </p>
			              <select type="query-selector" className="form-control" id="query-selector" name="query-selector" value={this.state.selectedQuery} onChange={this.handleQueryFiltering.bind(this)}>
			                <option value="chooseQuery">Choose query</option>
			                { this.state.myQueries.map(query => {
		                    return <option key={query.queryID} value={query.queryID} >{query.name} </option>;
		                  })}
			              </select>
										<hr />
			              { this.state.selectedQuery !== 'chooseQuery' ?
				              <div>
				              	<SingleMyQuery queryID={this.state.selectedQuery}  />
				              </div>
				           : null}
			              <hr />
			            </div>}
		            </div> :
			            <div className="col-xs-12 col-sm-12">
			            	<h5>Choose a course to choose query.</h5>
			        	</div>}
	        </div>
	       </DocumentTitle>
	    )
	}
}
export default viewMyQueriesPage;
