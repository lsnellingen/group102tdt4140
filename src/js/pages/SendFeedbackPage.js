import React from 'react';
import DocumentTitle from 'react-document-title';
import axios from 'axios';

export default class SendFeedbackPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedOption: '',
      subject: '',
      theme: '',
      pFeedback: '',
      nFeedback: '',
      date: new Date(),
      myCourses: [],
      showSuccessful: false,
      showWarning: false,
      showUnsuccsessfull: false
    }
  }
  handleOptionChange(field,changeEvent){
    var object = {};
    object[field] = changeEvent.target.value;

    this.setState(object);
    this.setState({
      showUnsuccsessfull: false
    })
  }
  handleFormSubmit(formSubmitEvent){
    if(this.state.subject.length == 0 || this.state.subject == 'chooseSubject' || this.state.theme.length == 0 || this.state.selectedOption.length == 0 || (this.state.pFeedback.length == 0 && this.state.nFeedback.length == 0)) {
      this.setState({
        showUnsuccsessfull: true
      })
    } else {
      const username = this.context.user.email;
      const selectedOption = this.state.selectedOption;
      const subject = this.state.subject;
      const theme = this.state.theme;
      const pFeedback = this.state.pFeedback;
      const nFeedback = this.state.nFeedback;
      const date = this.state.date;
      axios.post('/sendFeedback/' + username +
                 '/' + subject +
                 '/' + theme +
                 '/' + selectedOption +
                 '/' + pFeedback +
                 '/' + nFeedback)
      .then(res => {
        console.log("Feedback sendt");
      });
      this.setState({
        selectedOption: '',
        subject: "",
        theme: "",
        pFeedback: "",
        nFeedback:"",
        showUnsuccsessfull: false,
        showSuccessful: true,
        showWarning: false
      })
    }
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
          showWarning: true
        });
      } else {
        this.setState({ myCourses: res.data[0].courses.split('+') });
      }
    });
  }

  render() {
  	return (

  		<DocumentTitle title={`Send Feedback`}>
  			<div className="container" onSubmit={this.handleFormSubmit.bind(this)}>
	        	<div className="row">
	        		<div className="col-xs-10">
                  <br />
		              <h3>Send Feedback</h3>
		              <hr />
                  <p>Select one of the courses yor're enrolled in and start sending specific feedback to your lecturer.<br/>When done sending feedback, you can go to the view feedback section and see all the feedback sendt in a specific course.</p>
                  <p></p>
                  <hr />
	        		</div>
	        	</div>
            <div className="col-xs-8 col-xs-offset-1">
            <div className="form-group">
              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <p>Choose the course to give feedback: </p>
                  <select type="subject-selector" className="form-control" id="subject-selector" name="subject-selector" value={this.state.subject}  onChange={this.handleOptionChange.bind(this,"subject")}>
                    <option value="chooseSubject">Choose course</option>
                      { this.state.myCourses.map(function(course){
                        return <option key={course} value={course}>{course}</option>;
                      })}
                  </select>
                  {this.state.showWarning ?
                    <div className="col-xs-10 removePadding">
                      <p className="alert alert-danger userMessage">You are not registered in any courses. Go to the course page and register for courses.</p>
                    </div>
                    : null }
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <p>Choose the subject to give feedback: </p>
                  <select type="subject-selector" className="form-control" id="subject-selector" name="subject-selector" value={this.state.theme} onChange={this.handleOptionChange.bind(this,"theme")}>
                    <option value="chooseSubject">Choose subject</option>
                    <option value="Lecture">Lecture</option>
                    <option value="Curriculum">Curriculum</option>
                    <option value="Assignments">Assignments</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
  	        	<div className="form-group">
  		        	<div className="row">
  			            <div className="col-xs-12">
  			            	<textarea type="feedback" className="form-control" id="feedback" name="feedback" value={this.state.pFeedback} onChange={this.handleOptionChange.bind(this,"pFeedback")} placeholder="Write your positive feedback here... " />
  			            </div>
  		          </div>
  	          </div>
                <div className="form-group">
    		        	<div className="row">
    			            <div className="col-xs-12">
    			            	<textarea type="feedback" className="form-control" id="feedback" name="feedback" value={this.state.nFeedback} onChange={this.handleOptionChange.bind(this,"nFeedback")} placeholder="Write your negative feedback here... " />
    			            </div>
    		            </div>
    	            </div>
                  <p> How would you rate the quality of this issue: </p>
                  <form className='form-inline' onSubmit={this.handleFormSubmit.bind(this)}>

                    <div className="radio">
                      <label>
                        <input type="radio" value="1" className="radioButtons" checked={this.state.selectedOption ==='1'}
                        onChange={this.handleOptionChange.bind(this, 'selectedOption')}  />
                        <span>1</span>
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" value="2" className="radioButtons" checked={this.state.selectedOption ==='2'}
                        onChange={this.handleOptionChange.bind(this,'selectedOption')}   />
                      <span>2</span>
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" value="3" className="radioButtons" checked={this.state.selectedOption ==='3'}
                        onChange={this.handleOptionChange.bind(this,'selectedOption')}  />
                      <span>3</span>
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" value="4" className="radioButtons" checked={this.state.selectedOption ==='4'}
                        onChange={this.handleOptionChange.bind(this,'selectedOption')}  />
                      <span>4</span>
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" value="5" className="radioButtons" checked={this.state.selectedOption ==='5'}
                        onChange={this.handleOptionChange.bind(this,'selectedOption')}  />
                      <span>5</span>
                      </label>
                    </div>

                  </form>

                  {this.state.showSuccessful ?
                    <div className="form-group">
                      <div className="row">
                          <div className="col-xs-12">
                            <p className="alert alert-success userMessage">Feedback sendt.</p>
                          </div>
                      </div>
                    </div> : null }
                    {this.state.showUnsuccsessfull ?
                      <div className="form-group">
                        <div className="row">
                            <div className="col-xs-12">
                              <p className="alert alert-danger userMessage">Please fill in all the fields. It is sufficient with either positive or negative feedback.</p>
                            </div>
                        </div>
                      </div> : null }

  	            <div className="form-group">
  		            	<button type="submit" className="btn btn-info hCenter formButtonMargin mediumButton" onClick={this.handleFormSubmit.bind(this)}>Submit</button>
  	            </div>
                {/* whenClicked is a property not an event, per se. */}
              </div>
  	        </div>
	</DocumentTitle>
  	);
  }
}
