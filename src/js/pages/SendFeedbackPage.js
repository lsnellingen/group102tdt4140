import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';

export default class SendFeedbackPage extends React.Component {
  constructor(props){
    super(props);
    this.state ={selectedOption: '',subject:"", theme: "", pFeedback:"",nFeedback:"", date: new Date()}
  }
  handleOptionChange(field,changeEvent){
    var object = {};
    object[field] = changeEvent.target.value;

    this.setState(object);
  }
  handleFormSubmit(formSubmitEvent){
    alert('Subject:'+ this.state.subject + '\n' + 'theme:' + this.state.theme + '\n' + 'pFeedback:' + this.state.pFeedback + '\n' + 'nFeedback'
    + this.state.nFeedback + '\n' + 'selectedOption' + this.state.selectedOption + '\n' + new Date());
    this.setState({
      selectedOption: '',
      subject: "",
      theme: "",
      pFeedback: "",
      nFeedback:""

    })
  }



  render() {
    const radioButtonStyle = {
      marginLeft: '1vh',
      marginBottom:'1vh'
    };
  	return (

  		<DocumentTitle title={`Send Feedback`}>
  			<div className="form" onSubmit={this.handleFormSubmit.bind(this)}>
	        	<div className="row">
	        		<div className="col-xs-12">
		              <h3>Send Feedback</h3>
		              <hr />
	        		</div>
	        	</div>
            <div className="col-xs-10 col-xs-offset-1">
            <div className="form-group">
              <div className="row">
                <div className="col-xs-12 col-sm-12">
                  <p>Choose the subject to give feedback: </p>
                  <select type="subject-selector" className="form-control" id="subject-selector" name="subject-selector" value={this.state.subject}  onChange={this.handleOptionChange.bind(this,"subject")}>
                    <option value="chooseSubject">Choose subject</option>
                    <option value="subject1">Subject 1</option>
                    <option value="subject2">Subject 2</option>
                    <option value="subject3">Subject 3</option>
                    <option value="subject4">Subject 4</option>
                  </select>
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



  	            <div className="form-group">
  		            	<button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit.bind(this)}>Submit</button>
  	            </div>
                {/* whenClicked is a property not an event, per se. */}
              </div>
  	        </div>
	</DocumentTitle>
  	);
  }
}
