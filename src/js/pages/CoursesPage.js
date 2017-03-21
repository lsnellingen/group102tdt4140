// Libs
import React, { Component } from 'react';
import axios from 'axios';
import DeleteIcon from 'react-icons/lib/md/delete';

class Courses extends Component {

  constructor(props) {
    super(props);
      this.state = {
        allCourses: [],
        matchingCourses: [],
        myCourses: [],
        inputValue: '',
        showSuccessfulMessage: false,
        successfulMessage: ''
      };

       this.handleChange = this.handleChange.bind(this);
       this.handleClickOnAddButton = this.handleClickOnAddButton.bind(this);
       this.handleClickOnRemoveButton = this.handleClickOnRemoveButton.bind(this);
    }

  static contextTypes = {
    user: React.PropTypes.object
  };

  componentDidMount() {
    const currentUser = this.context.user ? this.context.user.email.toLowerCase() : 'No user';
    axios.get('/getCourses/' + currentUser)
    .then(res => {
      if(res.data[0].courses == "") {
        this.setState({ myCourses: ["You are not registered in any courses"] });
      } else {
        this.setState({ myCourses: res.data[0].courses.split('+') });
      }
    });
    axios.get('http://www.ime.ntnu.no/api/course/-')
    .then(res => {
      this.setState({ allCourses: res.data.course });
    });
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
    const matches = []
    this.state.allCourses.forEach(function(course) {
      if (course.code.toLowerCase().includes(event.target.value.toLowerCase())) {
        matches.push(course.code + " - " + course.name);
      }
    });
    this.setState({matchingCourses: matches});
  }

  handleClickOnAddButton(course) {
    var newCourseList = [];
    if(this.state.myCourses.indexOf(course) != -1) {
      console.log("You are already in this course");
    } else {
      if(this.state.myCourses[0] == ["You are not registered in any courses"]) {
        this.setState({myCourses: [course]})
        newCourseList = [course];
      } else {
        const updatedList = this.state.myCourses.concat([course]);
        this.setState({myCourses: updatedList})
        newCourseList = updatedList;
      }
      this.setState({
        successfulMessage: course + ' is added to your courses.',
        showSuccessfulMessage: true
      })
      const currentUser = this.context.user ? this.context.user.email.toLowerCase() : 'No user';
      const currentCourses = newCourseList.join('+');
      axios.post('/updateCourses/' + currentUser + '/' + currentCourses)
      .then(res => {
        console.log("Course added: " + course);
      });
    }
  }

  handleClickOnRemoveButton(course) {
    var index = this.state.myCourses.indexOf(course);
    var updatedList = this.state.myCourses.concat();
    updatedList.splice(index, 1);
    const currentUser = this.context.user ? this.context.user.email.toLowerCase() : 'No user';
    const currentCourses = updatedList.join('+');
    axios.post('/updateCourses/' + currentUser + '/' + currentCourses)
    .then(res => {
      console.log("Course removed: " + course);
    });
    this.setState({
      myCourses: updatedList,
      successfulMessage: course + ' is removed from your courses.',
      showSuccessfulMessage: true
     })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h3>Courses:</h3>
            <hr />
          </div>

          <div className="col-xs-7">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">Find courses:</h3>
              </div>
              <div className="panel-body">
                 <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Emnekode" value={this.state.inputValue} onChange={this.handleChange}/>
                 <br></br>
                 <ul className="list-group">
                   { (this.state.matchingCourses.length < 8 ? this.state.matchingCourses : this.state.matchingCourses.slice(0,8)).map(course => {
                     return <li key={course} className="list-group-item">{course}
                              <button className="btn btn-default pull-right" onClick={() => this.handleClickOnAddButton(course)}>Add course</button>
                              <div className="clearfix"></div>
                             </li>;
                    })}
                 </ul>
              </div>
            </div>
          </div>

          <div className="col-xs-5">
            <div className="panel panel-info border-left">
              <div className="panel-heading">
                <h3 className="panel-title">Your courses:</h3>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  { this.state.myCourses.map(course => {
                    return <li key={course} className="list-group-item">{course}
                              <DeleteIcon className="pull-right onHover" size={20} onClick={() => this.handleClickOnRemoveButton(course)}/>
                              <div className="clearfix"></div>
                           </li>;
                  })}
                </ul>
                {this.state.showSuccessfulMessage ? <p className="alert alert-success ">{this.state.successfulMessage}</p> : null }
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Courses;
