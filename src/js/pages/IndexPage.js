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

<<<<<<< HEAD
          <Authenticated>
            <div className="col-xs-12">
              <div className="jumbotron">
                <div className="row">
                  <div className="col-xs-2 col-xs-offset-1">
                    <FeedbackIcon size={150} color={'#4C5760'}/>
                  </div>
                  <div className="col-xs-7 col-xs-offset-2">
                    <h2 className="text-center">EDUBOT - A feedback tool for students</h2>
                    <br />
                    <div className="vSpacing"><LabelIcon className="vCenterIcon" size={20} color={'#4C5760'}/><big>Create a user, register for courses and start sending feedback.</big></div>
                    <div className="vSpacing"><LabelIcon className="vCenterIcon" size={20} color={'#4C5760'}/><big>Choose a topic and tell your lecturer what you like and dislike.</big></div>
                    <div className="vSpacing"><LabelIcon className="vCenterIcon" size={20} color={'#4C5760'}/><big>Rate courses, other feedback and improve your own experience. </big></div>
                  </div>
=======
          <div className="col-xs-6">
            <div className="jumbotron">
              <div className="row greyColor">
                <div>
                  <QueriesIcon className="frontPageIcon" size={30}/>
                  <h3 className="inline">QUERIES</h3>
>>>>>>> ffed0909452e1101777a8a41c2784c5cf996193e
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
                    <div className="">
                      <button className="btn btn-info pull-left">Recent feedback</button>

                      <button className="btn btn-info pull-right">Latest responses</button>
                      <button className="btn btn-info hCenter">Most upvoted</button>
                    </div>
                  </div>
                  <div className="panel-body">
                    <ul className="list-group">
                      <li className="list-group-item">First</li>
                      <li className="list-group-item">Second</li>
                      <li className="list-group-item">Third</li>
                    </ul>
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
                  <h5>Start sending feedback to your lecturers, right away!</h5>
                  <p><em>
                    Create a user, sign up for courses and send feedback
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
                  <p>Let your lecturers know what you think, logg in and start sending feedback now.</p>
                  <Link to="/login"><button className="btn btn-default">LOGG INN</button></Link>
                </div>
              </div>
            </div>
          </NotAuthenticated>

        </div>
      </div>
    );
  }
}
