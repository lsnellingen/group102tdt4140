// Libs
import React, { Component } from 'react';
import axios from 'axios';

import SingleMyQueries from './SingleMyQueries';
class SingleMyQuery extends Component {

	constructor(props) {
	    super(props);
	      this.state = {
	      	queryID: this.props.queryID,
	      	myQueries: []
	      };
    }

	static contextTypes = {
      user: React.PropTypes.object
    };
    
    componentDidMount() {
    	axios.get('/getQueries/' + this.props.queryID)
	    .then(res => {
	      this.setState({myQueries: res.data});
	    });
    }

    componentWillReceiveProps(nextProps){
	  this.setState({
	    queryID: nextProps.queryID
	  });
	  axios.get('/getQueries/' + nextProps.queryID)
	    .then(res => {
	     this.setState({myQueries: res.data});
	  }); 
	}

    render(){
		return (
        <div className="panel-body removePadding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 removePadding">
              <ul className="list-group removeMargin">
                <div>
                { this.state.myQueries.map(queries => {
                    return <SingleMyQueries key={queries.queriesID} queries={queries} />;
                  })}
                </div>
              </ul>
            </div>
          </div>
        </div>
        </div>
		);
	}
}
export default SingleMyQuery;