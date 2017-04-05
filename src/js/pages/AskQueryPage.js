import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import axios from 'axios';

import SingleQuestion from './SingleQuestion';
import CourseInformationForm from './CourseInformationForm';
import AddingQuestionForm from './AddingQuestionForm';
import QueryInformation from './QueryInformation';

class AskQueryPage extends Component {

  constructor(props) {
    super(props);
      this.state = {
        status: 'addingQueryInformation', //addingQueryInformation, addingQuestions
        myCourses: [],
        currentCourse: '',
        showWarning: false,
        query: {"description": "I would like to know how many of you that are willing to wake up earlier to get more out of the day.", "name": "Earlier lecturers on friday", "course": "TDT4120 - Algoritmer og datastrukturer"},
        questions: []
      };
    }
    static contextTypes = {
      user: React.PropTypes.object
    };

    updateQueryInformation(newQuery) {
      this.setState({
        query: newQuery,
        status: 'addingQuestions'
      })
    }

    addQuestion(newQuestion) {
      var newQuestions = this.state.questions;
      newQuestions.push(newQuestion);
      this.setState({questions: newQuestions});
    }

    deleteQuestion(key) {
      var newList = this.state.questions;
      newList.splice(key, 1);
      this.setState({
        questions: newList
      })
    }

    handleQueryRequest(event) {
      event.preventDefault();
      const username = this.context.user.email;
      const name = this.state.query.name;
      const description = this.state.query.description;
      const course = this.state.query.course;
      axios.post('/sendQuery/' + username +
                 '/' + name +
                 '/' + description +
                 '/' + course)
      .then(res => {
        var id = res.data.insertId;
        console.log("Query done with ID: " + id);
        this.sendQueries(id);
      });
      this.setState({status: 'querySendt'})
    }

    sendQueries(id) {
      const questions = this.state.questions;
      for (let question of questions) {
        question.question = question.question.replace(/\?/g, 'QUESTIONMARK');
        if(question.alternatives.length > 0) {
          axios.post('/sendQueries/' + id +
                     '/' + question.question +
                     '/' + question.type +
                     '/' + question.alternatives.join('+'))
          .then(res => {
            console.log("Querie done with ID: " + res.data.insertId);
          });
        } else {
          axios.post('/sendQueries/' + id +
                     '/' + question.question +
                     '/' + question.type +
                     '/' + 'Empty')
          .then(res => {
            console.log("Querie done with ID: " + res.data.insertId);
          });
        }
      }
    }

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

            <div className="col-xs-11">
              { this.state.status == 'addingQueryInformation' ? <CourseInformationForm updateQueryInformation={this.updateQueryInformation.bind(this)}/> : null}
            </div>
            <div className="col-xs-8">
              { this.state.status == 'addingQuestions' ? <AddingQuestionForm addQuestion={this.addQuestion.bind(this)} /> : null }
              { this.state.status == 'querySendt' ? <p className="alert alert-success">Query successfully created. Information is still visible untill you leave this page. </p> : null}
              { this.state.questions.map(question => {
                return <SingleQuestion key={question.question} number={this.state.questions.indexOf(question) + 1} deleteQuestion={this.deleteQuestion.bind(this)} question={question} />;
              })}
            </div>
            <div className="col-xs-4">
              { this.state.status == 'addingQuestions' || this.state.status == 'querySendt' ?
                  <QueryInformation query={this.state.query} numberOfQuestions={this.state.questions.length} /> : null
               }
              { this.state.questions.length > 0 && this.state.status == 'addingQuestions' ?
                  <button className="btn btn-info bigButton" onClick={this.handleQueryRequest.bind(this)}>CREATE QUERY</button> : null
               }
            </div>
          </div>
        </div>
	    </DocumentTitle>
  	);
  }
}

export default AskQueryPage;
