import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';

export default class SendFeedbackPage extends React.Component {
  render() {
  	return (
  		<DocumentTitle title={`Send Feedback`}>
  			<div className="container">
	        	<div className="row">
	        		<div className="col-xs-12">
		              <h3>Send Feedback</h3>
		              <hr />
	        		</div>
	        	</div>
            <div className="col-xs-10 col-xs-offset-1">
  	        	<div className="form-group">
  		        	<div className="row">
  			            <div className="col-xs-12">
  			            	<textarea type="feedback" className="form-control" id="feedback" name="feedback" placeholder="Write your feedback here... " required />
  			            </div>
  		            </div>
  	            </div>
  	            <div className="form-group">
  	            	<div className="row">
  		            	<div className="col-xs-12 col-sm-12">
  				            <p>Choose the subject to give feedback: </p>
  				            <select type="subject-selector" className="form-control" id="subject-selector" name="subject-selector">
        							  <option value="chooseSubject">Choose subject</option>
        							  <option value="subject1">Subject 1</option>
        							  <option value="subject2">Subject 2</option>
        							  <option value="subject3">Subject 3</option>
        							  <option value="subject4">Subject 4</option>
        							</select>
        						</div>
        					</div>
        				</div>
        				<div className="form-group">
        	            	<div className="row">
        		            	<div className="col-xs-12 col-sm-12">
        				            <p>Lecture you are giving feedback: </p>
        				            <select type="lecture-selector" className="form-control" id="lecture-selector" name="lecture-selector">
        				              <option value="chooseLecture">Choose lecture</option>
        							  <option value="subject1">Lecture 1</option>
        							  <option value="subject2">Lecture 2</option>
        							  <option value="subject3">Lecture 3</option>
        							  <option value="subject4">Lecture 4</option>
        							</select>
        						</div>
        					</div>
        				</div>

  	            <div className="form-group">
  		            	<button type="button" className="btn btn-primary">Submit</button>
  	            </div>
              </div>
  	        </div>
	</DocumentTitle>
  	);
  }
}
