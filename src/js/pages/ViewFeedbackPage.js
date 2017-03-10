import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';

export default class ViewFeedbackPage extends React.Component {
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
	        	<div className="row">
		            <div className="col-xs-12">
		            	
		            </div>
	            </div>
        	</div>
  		</DocumentTitle>
  	);
  }
}