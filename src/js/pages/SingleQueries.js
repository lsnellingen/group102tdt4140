// Libs
import React, { Component } from 'react';
import axios from 'axios';
import UpvoteIcon from 'react-icons/lib/md/thumb-up';

class SingleQueries extends Component {

  constructor(props){
    super(props);
    this.state = {
      answer: '',
      myAlternatives: []
    }
  }
  handleOptionChange(field,changeEvent){
    var object = {};
    object[field] = changeEvent.target.value;

    this.setState(object);
  }

  static contextTypes = {
    user: React.PropTypes.object
  };

  componentDidMount() {
    this.setState({
      myAlternatives: this.props.queries.alternatives.split('+')
    });
  }

  componentWillReceiveProps(nextProps){
      this.setState({
      myAlternatives: nextProps.queries.alternatives.split('+')
    });
  }

  render() {
    let answerType = null;
    if(this.props.queries.type == "Text"){
      answerType = 
      <div>
        <textarea type="answerArea" className="form-control" id="answerArea" name="answerArea" placeholder="Write your answer here... " />
      </div>;
    } else if(this.props.queries.type == "Rating"){
      const radioButtonStyle = {
      marginLeft: '1vh',
      marginBottom:'1vh'
      };
      answerType =
        <form className='form-inline'>
          <div className="radio" style={radioButtonStyle}>
            <label>
              <input type="radio" value="1" checked={this.state.selectedOption ==='1'}
              onChange={this.handleOptionChange.bind(this, 'selectedOption')}  />
                1
            </label>
          </div>
          <div className="radio" style={radioButtonStyle}>
            <label>
              <input type="radio" value="2" checked={this.state.selectedOption ==='2'}
              onChange={this.handleOptionChange.bind(this,'selectedOption')}   />
                2
            </label>
          </div>
          <div className="radio" style={radioButtonStyle}>
            <label>
              <input type="radio" value="3" checked={this.state.selectedOption ==='3'}
              onChange={this.handleOptionChange.bind(this,'selectedOption')}  />
                3
            </label>
          </div>
          <div className="radio" style={radioButtonStyle}>
            <label>
              <input type="radio" value="4" checked={this.state.selectedOption ==='4'}
              onChange={this.handleOptionChange.bind(this,'selectedOption')}  />
                4
            </label>
          </div>
          <div className="radio" style={radioButtonStyle}>
            <label>
              <input type="radio" value="5" checked={this.state.selectedOption ==='5'}
              onChange={this.handleOptionChange.bind(this,'selectedOption')}  />
                5
            </label>
          </div>
        </form>
    } else{
      answerType = 
      <select type="alternative-selector" className="form-control" id="alternative-selector" name="alternative-selector"  >
        <option value="chooseAnswer">Choose an answer</option>
        { this.state.myAlternatives.map(alternative => {
           return <option key={alternative} value={alternative} onChange={this.handleOptionChange.bind(this)} >{alternative} </option>;
        })}
      </select>
    }
    return (
      <div className="panel panel-info">
      <div className="panel-heading clearfix">
          <div className="col-xs-9 removePadding">
            <span>{this.props.queries.question}</span>
          </div>
        </div>
        <div className="panel-body removePadding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 removePadding">
              <ul className="list-group removeMargin">
                <div>
                  <li className="list-group-item"><strong>Question:</strong> {this.props.queries.question}</li>
                  {answerType}
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




export default SingleQueries;
