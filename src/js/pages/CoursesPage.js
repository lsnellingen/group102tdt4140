// Libs
import React, { Component } from 'react';
import axios from 'axios';
import CoursesIcon from 'react-icons/lib/md/toc';
import DeleteIcon from 'react-icons/lib/md/clear';
import SearchIcon from 'react-icons/lib/md/search';

class Courses extends Component {

  constructor(props) {
    super(props);
      this.state = {
        allCourses: [],
        matchingCourses: [],
        myCourses: [],
        inputValue: '',
        showSuccessfulMessage: false,
        successfulMessage: '',
        messageType: ''
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
      if (course.code.toLowerCase().includes(event.target.value.toLowerCase()) || course.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        matches.push(course.code + " - " + course.name);
      }
    });
    this.setState({matchingCourses: matches});
  }

  handleClickOnAddButton(course) {
    var newCourseList = [];
    if(this.state.myCourses.indexOf(course) != -1) {
      console.log("You are already in this course");
      this.setState({
        successfulMessage: 'You are already assigned to this course.',
        messageType: 'alert-danger',
        showSuccessfulMessage: true
      })
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
        messageType: 'alert-success',
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
    if(updatedList.length > 0) {
      axios.post('/updateCourses/' + currentUser + '/' + currentCourses)
      .then(res => {
        console.log("Course removed: " + course);
      });
    } else {
      axios.post('/updateCourses/' + currentUser + '/Empty' )
      .then(res => {
        console.log("Course removed: " + course);
      });
    }
    this.setState({
      myCourses: updatedList.length > 0 ? updatedList : ["You are not registered in any courses"],
      successfulMessage: course + ' is removed from your courses.',
      messageType: 'alert-warning',
      showSuccessfulMessage: true
     })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <br />
            <h3>Courses</h3>
            <hr />
            <p>This site provide a full overview of all courses you're enrolled in. You can easily add new courses by searching for name or course code in the find course section.</p>
            <p>Removing courses is done by clicking the remove button after each course in the list to the left.</p>
            <hr />
          </div>


          <div className="col-xs-12 col-md-6">
            <div className="panel panel-info border-left">
              <div className="panel-heading">
                <h3 className="panel-title"><CoursesIcon size={20} className="vCenterIcon"/> Your courses:</h3>
              </div>
              <div className="panel-body">
                { this.state.myCourses[0] == "You are not registered in any courses" ?
                    <ul className="list-group">
                      <li className="list-group-item">{this.state.myCourses[0]}</li>
                    </ul>
                    :
                    <ul className="list-group">
                      <h5>List over all courses you are enrolled in:</h5>
                      { this.state.myCourses.map(course => {
                        return <li key={course} className="list-group-item">{course}
                                  <DeleteIcon className="pull-right fontColor onHover vCenterIcon" size={25}  onClick={() => this.handleClickOnRemoveButton(course)}/>
                                  <div className="clearfix"></div>
                               </li>;
                      })}
                    </ul>
                  }
                {this.state.showSuccessfulMessage ? <p className={"alert " + this.state.messageType} >{this.state.successfulMessage}</p> : null }
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-6">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title"><SearchIcon size={18} className="vCenterIcon" /> Find courses:</h3>
              </div>
              <div className="panel-body">
                 <h5>Search for course by name or course code:</h5>
                 <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Course code" value={this.state.inputValue} onChange={this.handleChange}/>
                 <br></br>
                 <ul className="list-group">
                   { (this.state.matchingCourses.length < 7 ? this.state.matchingCourses : this.state.matchingCourses.slice(0,7)).map(course => {
                     return <li key={course} className="list-group-item"><span>{course}</span>
                              <button className="btn btn-default pull-right" onClick={() => this.handleClickOnAddButton(course)}>Add course</button>
                              <div className="clearfix"></div>
                             </li>;
                    })}
                 </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Courses;
