import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class ViewQueriesPage extends Component {

  render() {
  	return (
  		<DocumentTitle title={`Ask query`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <br />
              <h3>View queries:</h3>
              <hr />
            </div>
          </div>
        </div>
	    </DocumentTitle>
  	);
  }
}

export default ViewQueriesPage;
