// Libs
import React, { Component } from 'react';
import axios from 'axios';

class Courses extends Component {

  constructor(props) {
    super(props);
      this.state = {
        allCourses: [],
        matchingCourses: [],
        myCourses: [],
        inputValue: ''
      };

       this.handleChange = this.handleChange.bind(this);
       this.handleClickOnAddButton = this.handleClickOnAddButton.bind(this);
    }

  static contextTypes = {
    user: React.PropTypes.object
  };

  componentDidMount() {
    this.setState({ myCourses: (this.context.user ? (this.context.user.customData.courses == undefined ? ["Du har ingen emner"] : this.context.user.customData.courses) : []) });
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
    const updatedList = this.state.myCourses.concat([course]);
    this.setState({myCourses: updatedList})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h3>Dine emner:</h3>
            <hr />
          </div>

          <div className="col-xs-7">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">Finn emner:</h3>
              </div>
              <div className="panel-body">
                 <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Emnekode" value={this.state.inputValue} onChange={this.handleChange}/>
                 <br></br>
                 <ul className="list-group">
                   { (this.state.matchingCourses.length < 10 ? this.state.matchingCourses : this.state.matchingCourses.slice(0,9)).map(course => {
                     return <li key={course} className="list-group-item">{course}
                              <button className="btn btn-default pull-right" value="123" onClick={() => this.handleClickOnAddButton(course)}>Legg til emne</button>
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
                <h3 className="panel-title">Dine emner</h3>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  { this.state.myCourses.map(function(course){
                    return <li key={course} className="list-group-item">{course}</li>;
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
