import React, { Component } from 'react';

class Student extends Component {
  render() {
    return (
      <div>
        <h1>THIS IS THE STUDENT SITE</h1>
        <div className="col-xs-6 col-xs-offset-3">
          <form>
            <div className="form-group">
              <label for="studentName">Name</label>
              <input type="text" className="form-control" id="studentName" placeholder="Student's name" />
            </div>
            <div className="form-group">
              <label for="studentFeedback">Feedback</label>
              <textarea className="form-control" id="studentFeedback" placeholder="Feedback" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Student;
