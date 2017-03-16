import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';

export default class ViewFeedbackPage extends React.Component {
  render() {
  	const courses = this.context.user ? this.context.user.customData.courses : ["Du har ingen emner"]
  	return (
  		<DocumentTitle title={`View Feedback`}>
  			<div className="container">
	        	<div className="row">
	        		<div className="col-xs-12">
		              <h3>View Feedback</h3>
		              <hr />
	        		</div>
	        	</div>
		        <div className="col-xs-10 col-xs-offset-1">
		        	
		        	<div className="form-group">
			        	<div className="row">
				            <div className="col-xs-12">
				            	<textarea type="feedback" className="form-control" id="feedback" name="feedback" placeholder="Posetive feedback... " required />
				            </div>
			            </div>
		            </div>
		        	<div className="form-group">
			        	<div className="row">
				            <div className="col-xs-12">
				            	<textarea type="feedback" className="form-control" id="feedback" name="feedback" placeholder="Negative feedback... " required />
				            </div>
			            </div>
		            </div>
		            <div className="form-group">
		            	<div className="row">
			            	<div className="col-xs-12 col-sm-12">
					            <p>Choose the subject to view feedback: </p>
					            <select type="subject-selector" className="form-control" id="subject-selector" name="subject-selector">
						            { courses.map(function(course){
				                      return <option key={course} value={course} className="list-group-item">{course}</option>;
				                    })}
								</select>
							</div>
						</div>
					</div>
		            <div className="form-group">
			            	<button type="button" className="btn btn-primary">View feedback</button>
		            </div>
	        	</div>
        	</div>
  		</DocumentTitle>
  	);
  }
}