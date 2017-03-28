// Libs
import React, { Component } from 'react';

class AddingQuestionForm extends Component {

  constructor(props) {
    super(props);
      this.state = {
        question: '',
        type: 'chooseType',
        currentAlternative: '',
        alternatives: [],
        showWarning: false
      };
    }

    handleFiltering(event) {
       if(event.target.value == "Yes or No") {
         this.setState({
           type: event.target.value,
           alternatives: ["Yes", "No"],
           showWarning: false
          })
       } else {
         this.setState({
           type: event.target.value,
           showWarning: false
          })
       }
    }

    handleQuestionChange(event) {
      this.setState({
        question: event.target.value,
        showWarning: false
       })
    }

    handleAlternativeChange(event) {
      this.setState({
        currentAlternative: event.target.value,
        showWarning: false
      })
    }

    handleAddAlternative(event) {
      event.preventDefault();
      var newAlternatives = this.state.alternatives;
      newAlternatives.push(this.state.currentAlternative);
      this.setState({
        alternatives: newAlternatives,
        currentAlternative: ""
      })
    }

    handleSubmit(event){
      event.preventDefault();
      if(this.state.question == '' || this.state.type == 'chooseType') {
        this.setState({showWarning: true})
      } else {
        if(this.state.type == 'Multiple choice' && this.state.alternatives.length == 0) {
          this.setState({showWarning: true})
        } else {
          const newQuestion = {"question": this.state.question, "type": this.state.type, "alternatives": this.state.alternatives}
          this.props.addQuestion(newQuestion);
          this.setState({
            question: '',
            type: '',
            alternatives: [],
            currentAlternative: ''
          })
        }
      }
    }

  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
        Add new question:
        </div>
        <div className="panel-body">
          <div className="container">
            <div className="row">
              <div className="col-xs-7">
                <form onSubmit={this.handleSubmit.bind(this)}>

                  <div className="form-group">
                    <p>Question:</p>
                    <input type="text" className="form-control" id="question" placeholder="Question" value={this.state.question} onChange={this.handleQuestionChange.bind(this)}/>
                  </div>
                  <div className="form-group">
                    <p>Type of question:</p>
                    <select type="subject-selector" className="form-control" id="subject-selector" name="subject-selector" value={this.state.type} onChange={this.handleFiltering.bind(this)}>
                      <option value="chooseType">Choose type</option>
                      <option value="Text">Text</option>
                      <option value="Multiple choice">Multiple choice</option>
                      <option value="Yes or No">Yes or No</option>
                      <option value="Rating">Rating</option>
                    </select>
                  </div>
                  { this.state.type == 'Multiple choice' ?
                    <div className="form-group">
                    <hr />
                      <div className="row">
                        <div className="col-xs-8">
                          <p>Alternatives:</p>
                          <div className="form-inline">
                            <input type="text" className="form-control" id="question" placeholder="Alternative" value={this.state.currentAlternative} onChange={this.handleAlternativeChange.bind(this)} />
                            <button className="btn btn-info marginLeft20" onClick={this.handleAddAlternative.bind(this)}>Add alternative</button>
                          </div>
                        </div>
                        <div className="col-xs-4 margin-top20">
                          <p>Your alternatives: </p>
                            { this.state.alternatives.map(alternative => {
                              return <li className="questionAlternatives" key={alternative}>{alternative}</li>;
                            })}
                        </div>
                      </div>
                      <hr />
                    </div>
                    : null}
                    {this.state.showWarning ?
                      <div className="form-group removePadding">
                        <p className="alert alert-danger userMessage">You have to fill in all sections.</p>
                      </div>
                      : null }
                  <div className="form-group">
                    <button type="submit" className="btn btn-info hCenter formButtonMargin">Add question</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default AddingQuestionForm;
