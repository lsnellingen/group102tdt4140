// Libs
import React, { Component } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class SingleMyQueries extends Component {

	constructor(props) {
	    super(props);
	      this.state = {
	      	answers: [],
	      	myAlternatives: [],
          type: ''
	      };
    }

	static contextTypes = {
      user: React.PropTypes.object
    };
    
    componentDidMount() {
    	this.setState({
        myAlternatives: this.props.queries.alternatives.split('+'),
        answers: this.props.queries.answers.split('+'),
        type: this.props.queries.type
      });
    }

  componentWillReceiveProps(nextProps){
    this.setState({
        myAlternatives: nextProps.queries.alternatives.split('+'),
        answers: nextProps.queries.answers.split('+'),
        type: this.props.queries.type
    });
	}

  render(){
    let result = null;
    if(this.state.type == "Text"){
      var textIndex = 0;
      result = 
      <div>
        {this.state.answers.map(answers => {
          textIndex++;
          return (
            <p key={textIndex}>
              {answers}
            </p>
            )
        })}
      </div>  
    } else if(this.state.type == "Rating"){
      var ratingArray = [0,0,0,0,0];
      this.state.answers.map(answers => {
          ratingArray[(parseInt(answers)-1)] = ratingArray[(parseInt(answers)-1)] + 1;
      })
      const data = [
        {name: '1', result: ratingArray[0]},
        {name: '2', result: ratingArray[1]},
        {name: '3', result: ratingArray[2]},
        {name: '4', result: ratingArray[3]},
        {name: '5', result: ratingArray[4]},
      ];
      result = 
      <BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="result" fill="#8884d8" />
      </BarChart>
    } else {
      var alternativesArray = new Array(this.state.myAlternatives.length).fill(0);
      const data = [];
      this.state.answers.map(answers => {
        for (var i = 0; i < this.state.myAlternatives.length; i++) { 
            if (this.state.myAlternatives[i] == answers){
              alternativesArray[i]++;
            };
        }
      })
      for (var j = 0; j < (alternativesArray.length); j++) { 
        if (alternativesArray[j] == 0){
          data.push({name: this.state.myAlternatives[j], result: 0});
        }else{
          data.push({name: this.state.myAlternatives[j], result: alternativesArray[j]});
        }
      }
      result = 
      <BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="result" fill="#8884d8" />
      </BarChart>
    }
		return (
		<div className="panel panel-info removePadding">
			<div className="panel-heading clearfix">
          <div className="col-xs-9 removePadding">
            <span>{this.props.queries.question}</span>
          </div>
          <div className="col-xs-3">
          </div>
        </div>
        <div className="panel-body removePadding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 removePadding">
              <ul className="list-group removeMargin">
                <div>
                {result}
                </div>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
		);
	}
}
export default SingleMyQueries;