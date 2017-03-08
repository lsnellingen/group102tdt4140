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
	        	<div className="row">
		            <div className="col-xs-12">
		            	
		            </div>
	            </div>
        	</div>
  		</DocumentTitle>
  	);
  }
}