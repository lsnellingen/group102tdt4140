// Libs
import React, { Component } from 'react';
import axios from 'axios';

class CourseInformationForm extends Component {

  constructor(props) {
    super(props);
      this.state = {
        myCourses: [],
        showWarning: false,
        showMessage: false,
        course: 'chooseCourse',
        name: '',
        description: ''
      };
    }
    static contextTypes = {
      user: React.PropTypes.object
    };

    componentDidMount() {
      const currentUser = this.context.user ? this.context.user.email.toLowerCase() : 'No user';
      axios.get('/getCourses/' + currentUser)
      .then(res => {
        if(res.data[0].courses == "") {
          this.setState({
            myCourses: [],
            showWarning: true});
        } else {
          this.setState({ myCourses: res.data[0].courses.split('+') });
        }
      });
    }

    handleOptionChange(field,changeEvent){
      var object = {};
      object[field] = changeEvent.target.value;

      this.setState(object);
      this.setState({showMessage: false})
    }

    handleFiltering(event) {
      this.setState({
        course: event.target.value,
        showMessage: false
       })
    }

    handleSubmit(event){
      event.preventDefault();
      if(this.state.name == '' || this.state.description == '' || this.state.course == 'chooseCourse') {
        this.setState({showMessage: true})
      } else {
        const newQuery = {"name": this.state.name, "description": this.state.description, "course": this.state.course}
        this.props.updateQueryInformation(newQuery);
      }
    }

  render() {
    return (
      <div className="">
        <div className="panel-body">
          <div className="container">
            <div className="row">
              <div className="col-xs-8 col-xs-offset-1">
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group">
                    <p>Choose course:</p>
                    <select type="subject-selector" className="form-control" id="subject-selector" name="subject-selector" value={this.state.course} onChange={this.handleFiltering.bind(this)}>
                      <option value="chooseCourse">Choose course</option>
                        { this.state.myCourses.map(course => {
                          return <option key={course} value={course} >{course}</option>;
                        })}
                    </select>
                    {this.state.showWarning ?
                      <div className="form-group removePadding">
                        <p className="alert alert-danger userMessage">You are not registered in any courses. Go to the course page and register for courses.</p>
                      </div>
                      : null }
                  </div>
                  <div className="form-group">
                    <p>Name:</p>
                    <input type="text" className="form-control" id="name" placeholder="Name" value={this.state.name} onChange={this.handleOptionChange.bind(this,"name")}/>
                  </div>
                  <div className="form-group">
                    <p>Short description: </p>
                    <textarea type="text" className="form-control" id="description" placeholder="Description" value={this.state.description} onChange={this.handleOptionChange.bind(this,"description")}/>
                  </div>
                  {this.state.showMessage ?
                    <div className="form-group removePadding">
                      <p className="alert alert-danger userMessage">You have to fill in all sections.</p>
                    </div>
                    : null }
                  <button type="submit" className="btn btn-info hCenter formButtonMargin mediumButton">Start adding questions</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}




export default CourseInformationForm;
