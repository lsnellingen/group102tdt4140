// Libs
import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Authenticated, NotAuthenticated, LoginLink } from 'react-stormpath';
import axios from 'axios';

// Components
import Logo from '../svg/Logo';
import FeedbackIcon from 'react-icons/lib/md/feedback';
import QueriesIcon from 'react-icons/lib/fa/question';


export default class IndexPage extends React.Component {

  static contextTypes = {
    user: React.PropTypes.object
  };


  render() {
    const courses = this.context.user ? (this.context.user.customData.courses == undefined ? ["Du har ingen emner"] : this.context.user.customData.courses) : [];
    return (
      <div className="container">
        <div className="row">

          <div className="col-xs-6">
            <div className="jumbotron">
              <div className="row greyColor">
                <div>
                  <FeedbackIcon className="frontPageIcon" size={35}/>
                  <h3 className="inline">FEEDBACKS</h3>
                </div>

                <hr className="marginTop7" />
                <div>
                  <h5 className="frontPageSection"><big>As a students you can <strong>send</strong> specified feedback in all courses you are enrolled in. You can also <strong>view</strong> feedback
                    from other students. And if you agree? <strong>Like</strong> their feedback so they know they are not alone. If it get enough likes, maybe
                    your teacher will give you a <strong>response</strong>?
                  </big></h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6">
            <div className="jumbotron">
              <div className="row greyColor">
                <div>
                  <QueriesIcon className="frontPageIcon" size={30}/>
                  <h3 className="inline">QUERIES</h3>
                </div>
                <hr className="marginTop7" />
                  <div>
                    <h5 className="frontPageSection"><big>As a lecturer you can <strong>make</strong> your own queries. <strong>Add</strong> as many questions as you like,
                      <strong> choose</strong> between different question types and <strong>ask</strong> your students. Wait and get <strong>responses</strong> from
                        your students on <strong>what you want to know</strong>.
                    </big></h5>
                  </div>
              </div>
            </div>
          </div>



          <Authenticated>

            <div className="container">
              <div className="col-xs-7">
                <div className="panel panel-info">
                  <div className="panel-heading">
                    <h4 className="text-center">Get started!</h4>
                  </div>
                  <div className="panel-body">
                    <div className="col-xs-5">
                      <p>Search, find and choose courses you want to participate in....</p>
                      <br />
                      <Link to="/emner"><button className="btn btn-default">GO TO COURSES</button></Link>
                    </div>
                    <Authenticated inGroup="Student" className="col-xs-7">
                      <p>..or maybe you allready are enrolled in courses? Then start sending feedback right now!</p>
                        <br />
                        <Link to="/SendFeedback"><button className="btn btn-default">SEND FEEDBACK</button></Link>
                    </Authenticated>
                    <Authenticated inGroup="Lecturer" className="col-xs-7">
                      <p>..or maybe you allready are enrolled in courses? Then start viewing feedback right now!</p>
                        <br />
                        <Link to="/ViewFeedback"><button className="btn btn-default">VIEW FEEDBACK</button></Link>
                    </Authenticated>
                  </div>
                </div>
              </div>
              <div className="col-xs-5">
                <div className="panel panel-info">
                  <div className="panel-heading">
                    <h3 className="panel-title">User information:</h3>
                  </div>
                  <div className="panel-body">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Name:</th>
                          <td>{this.context.user ? this.context.user.fullName : null}</td>
                        </tr>
                        <tr>
                          <th>Email:</th>
                          <td>{this.context.user ? this.context.user.email : null}</td>
                        </tr>
                        <tr>
                          <th>Position:</th>
                          <td>{this.context.user ? Object.keys(this.context.user.groups)[0] : null}</td>
                        </tr>
                        <tr>
                          <th>Member since:</th>
                          <td>{this.context.user ? this.context.user.createdAt.substring(0,10) : null}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </Authenticated>

          <NotAuthenticated className="notAuthenticated">
            <div className="col-xs-7">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h4 className="text-center">Get started!</h4>
                </div>
                <div className="panel-body">
                  <h5>Start sending feedback, creating queries and make your teching environment a better place.</h5>
                  <p><em>
                    Create a user, join the community and sign up for courses.
                  </em></p>
                <Link to="/register"><button className="btn btn-default">REGISTER</button></Link>
                </div>
              </div>
            </div>
            <div className="col-xs-5">
              <div className="panel panel-info">
                <div className="panel-heading">
                  <h4 className="text-center">Already have a user?</h4>
                </div>
                <div className="panel-body">
                  <p>Log in to see if someone has responded to your feedback or some of your queries. If your lucky, maybe you even have some likes.</p>
                  <Link to="/login"><button ref="login_button" className="btn btn-default">LOGG INN</button></Link>
                </div>
              </div>
            </div>
          </NotAuthenticated>

        </div>
      </div>
    );
  }
}
