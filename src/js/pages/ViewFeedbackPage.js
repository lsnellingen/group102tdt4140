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
        filteredFeedback: []
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
          this.setState({ myCourses: ["You are not registered in any courses"] });
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
  	return (
  		<DocumentTitle title={`View Feedback`}>
  			<div className="container">
	        	<div className="row">
	        		<div className="col-xs-12">
		              <h3>View Feedback</h3>
		              <hr />
	        		</div>
	        	</div>
            <div className="col-xs-12 col-sm-12">
              <p>Choose the course to see feedback of: </p>
              <select type="subject-selector" className="form-control" id="subject-selector" name="subject-selector" value={this.state.filterOption} onChange={this.handleFiltering.bind(this)}>
                <option value="chooseCourse">Choose course</option>
                  { this.state.myCourses.map(course => {
                    return <option key={course} value={course} >{course}</option>;
                  })}
              </select>
              <hr />
            </div>
            { this.state.filteredFeedback.length > 0 ?
              <div className="col-xs-10">
                <h4>Showing feedback in {this.state.filterOption}:</h4>
                <br />
              { this.state.filteredFeedback.map(feedback => {
                return <SingleFeedback key={feedback.feedbackID} feedback={feedback} />;
              })}
            </div>
            : <div className="col-xs-10">
              { this.state.filterOption == 'chooseCourse' ?
                <h5>Choose a filtering option to see feedback.</h5>
              :
                <h5>There is no feedback in this course.</h5>
              }
            </div>}

        	</div>
  		</DocumentTitle>
  	);
  }
}
