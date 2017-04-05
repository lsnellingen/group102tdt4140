import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
import axios from 'axios';

import SingleFeedback from './SingleFeedback';

export default class ViewFeedbackPage extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        myCourses: [],
        filterOption: 'chooseCourse',
        feedback: [],
        filteredFeedback: [],
        showWarning: false
      };
      this.handleFiltering = this.handleFiltering.bind(this);
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
      axios.get('/getFeedback/')
      .then(res => {
        this.setState({ feedback: res.data})
      });
    }

    handleFiltering(event) {
      axios.get('/getFeedback/')
      .then(res => {
        this.setState({ feedback: res.data})
      });
      var course = event.target.value;
      var updatedFeedbackList = [];
      this.state.feedback.forEach(feedback => {
        if(feedback.course == course) {
          updatedFeedbackList.push(feedback);
        }
      });
      this.setState({
        filterOption: course,
        filteredFeedback: updatedFeedbackList
       })

    }

  render() {
  	const courses = this.context.user ? this.context.user.customData.courses : ["Du har ingen emner"]
  	return (
  		<DocumentTitle title={`View Feedback`}>
  			<div className="container">
	        	<div className="row">
	        		<div className="col-xs-12">
                  <br />
		              <h3>View Feedback</h3>
		              <hr />
	        		</div>
	        	</div>
            <div className="col-xs-12 col-sm-12">
              <p>Choose the course to see feedback in: </p>
              <select type="subject-selector" className="form-control" id="subject-selector" name="subject-selector" value={this.state.filterOption} onChange={this.handleFiltering.bind(this)}>
                <option value="chooseCourse">Choose course</option>
                  { this.state.myCourses.map(course => {
                    return <option key={course} value={course} >{course}</option>;
                  })}
              </select>
              <hr />
            </div>
            { this.state.filteredFeedback.length > 0 ?
              <div className="col-sm-10 col-xs-12">
                <h4>Showing feedback in {this.state.filterOption}:</h4>
                <br />
              { this.state.filteredFeedback.map(feedback => {
                return <SingleFeedback key={feedback.feedbackID} feedback={feedback} />;
              })}
            </div>
            : <div className="col-sm-10 col-xs-12">
              { this.state.filterOption == 'chooseCourse' ?
                <div>
                  {this.state.showWarning ?
                    <div className="col-sm-10 col-xs-12 removePadding">
                      <p className="alert alert-danger userMessage">You are not registered in any courses. Go to the course page and register for courses.</p>
                    </div>
                    : <h5>Choose an option to view feedback.</h5> }
                </div>
              :
                <h5>There is no feedback in this course.</h5>
              }
            </div>}

        	</div>
  		</DocumentTitle>
  	);
  }
}
