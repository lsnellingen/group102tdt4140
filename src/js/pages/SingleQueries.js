// Libs
import React, { Component } from 'react';
import axios from 'axios';
import UpvoteIcon from 'react-icons/lib/md/thumb-up';

class SingleQueries extends Component {

  constructor(props){
    super(props);
    this.state = {
      answers: '',
      myAlternatives: []
    }
  }

  getAnswers(){
    return this.state.queries.answers;
  }

  handleOptionChange(field,changeEvent){
    var object = {};
    object[field] = changeEvent.target.value;
    this.setState(object);
    this.props.updateState(this.props.queriesNumber, changeEvent.target.value);
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
        <textarea type="answerArea" className="form-control" id="answerArea" name="answerArea" onChange={this.handleOptionChange.bind(this,"answers")} placeholder="Write your answer here... " />
      </div>;
    } else if(this.props.queries.type == "Rating"){
      const radioButtonStyle = {
      marginTop: '1vh',
      marginLeft: '1vh',
      marginBottom:'1vh'
      };
      answerType =
        <form className='form-inline vCenter'>
          <div className="vCenter">
            <div className="radio" style={radioButtonStyle}>
              <label>
                <input type="radio" value="1" checked={this.state.answers ==='1'}
                onChange={this.handleOptionChange.bind(this, 'answers')}  />
                   1
              </label>
            </div>
            <div className="radio" style={radioButtonStyle}>
              <label>
                <input type="radio" value="2" checked={this.state.answers ==='2'}
                onChange={this.handleOptionChange.bind(this,'answers')}   />
                   2
              </label>
            </div>
            <div className="radio" style={radioButtonStyle}>
              <label>
                <input type="radio" value="3" checked={this.state.answers ==='3'}
                onChange={this.handleOptionChange.bind(this,'answers')}  />
                   3
              </label>
            </div>
            <div className="radio" style={radioButtonStyle}>
              <label>
                <input type="radio" value="4" checked={this.state.answers ==='4'}
                onChange={this.handleOptionChange.bind(this,'answers')}  />
                   4
              </label>
            </div>
            <div className="radio" style={radioButtonStyle}>
              <label>
                <input type="radio" value="5" checked={this.state.answers ==='5'}
                onChange={this.handleOptionChange.bind(this,'answers')}  />
                   5
              </label>
            </div>
          </div>
        </form>
    } else{
      answerType =
      <select type="alternative-selector" className="form-control" id="alternative-selector" name="alternative-selector" onChange={this.handleOptionChange.bind(this,"answers")}>
        <option value="" onChange={this.handleOptionChange.bind(this)}>Choose an answer</option>
        { this.state.myAlternatives.map(alternative => {
           return <option key={alternative} value={alternative} onChange={this.handleOptionChange.bind(this)} >{alternative} </option>;
        })}
      </select>
    }
    return (
      <div className="">
        <p>{this.props.queries.question}</p>
        {answerType}
        <br />
      </div>
    );
  }
}

export default SingleQueries;
