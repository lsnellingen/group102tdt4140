import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class AskQueryPage extends Component {

  render() {
  	return (
  		<DocumentTitle title={`Ask query`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <br />
              <h3>Ask query:</h3>
              <hr />
            </div>
            <div className="col-xs-12 col-sm-12">
              <p>Create new query for your students: </p>
              <hr />
            </div>
          </div>
        </div>
	    </DocumentTitle>
  	);
  }
}

export default AskQueryPage;
