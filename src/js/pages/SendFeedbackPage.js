import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';

export default class SendFeedbackPage extends React.Component {
  constructor(props){
    super(props);
    this.state ={selectedOption: '0'}
  }
  handleOptionChange(changeEvent){
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }



  render() {
    const radioButtonStyle = {
      marginLeft: '1vh',
      marginBottom:'1vh'
    };
  	return (

  		<DocumentTitle title={`Send Feedback`}>
  			<div className="container">
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
                  <select type="subject-selector" className="form-control" id="subject-selector" name="subject-selector">
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
                  <select type="subject-selector" className="form-control" id="subject-selector" name="subject-selector">
                    <option value="chooseSubject">Choose subject</option>
                    <option value="subject1">Lecture</option>
                    <option value="subject2">Curriculum</option>
                    <option value="subject3">Assignments</option>
                    <option value="subject4">Other</option>
                  </select>
                </div>
              </div>
            </div>
  	        	<div className="form-group">
  		        	<div className="row">
  			            <div className="col-xs-12">
  			            	<textarea type="feedback" className="form-control" id="feedback" name="feedback" placeholder="Write your positive feedback here... " required />
  			            </div>
  		          </div>
  	          </div>
                <div className="form-group">
    		        	<div className="row">
    			            <div className="col-xs-12">
    			            	<textarea type="feedback" className="form-control" id="feedback" name="feedback" placeholder="Write your negative feedback here... " required />
    			            </div>
    		            </div>
    	            </div>
                  <p> How would you rate the quality of this issue: </p>
                  <form className='form-inline'>

                    <div className="radio" style={radioButtonStyle}>
                      <label>
                        <input type="radio" value="option1" checked={this.state.selectedOption ==='option1'}
                        onChange={this.handleOptionChange.bind(this)}  />
                          1
                      </label>
                    </div>
                    <div className="radio" style={radioButtonStyle}>
                      <label>
                        <input type="radio" value="option2" checked={this.state.selectedOption ==='option2'}
                        onChange={this.handleOptionChange.bind(this)}   />
                          2
                      </label>
                    </div>
                    <div className="radio" style={radioButtonStyle}>
                      <label>
                        <input type="radio" value="option3" checked={this.state.selectedOption ==='option3'}
                        onChange={this.handleOptionChange.bind(this)}  />
                          3
                      </label>
                    </div>
                    <div className="radio" style={radioButtonStyle}>
                      <label>
                        <input type="radio" value="option4" checked={this.state.selectedOption ==='option4'}
                        onChange={this.handleOptionChange.bind(this)}  />
                          4
                      </label>
                    </div>
                    <div className="radio" style={radioButtonStyle}>
                      <label>
                        <input type="radio" value="option5" checked={this.state.selectedOption ==='option5'}
                        onChange={this.handleOptionChange.bind(this)}  />
                          5
                      </label>
                    </div>

                  </form>



  	            <div className="form-group">
  		            	<button type="button" className="btn btn-primary">Submit</button>
  	            </div>
                {/* whenClicked is a property not an event, per se. */}
              </div>
  	        </div>
	</DocumentTitle>
  	);
  }
}
