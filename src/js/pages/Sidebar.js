import React from 'react';
import { Link } from 'react-router';

import HomeIcon from 'react-icons/lib/md/home';
import CreateAccountIcon from 'react-icons/lib/md/supervisor-account';
import LoginIcon from 'react-icons/lib/md/account-box';
import ForgotPasswordIcon from 'react-icons/lib/md/vpn-key';
import CoursesIcon from 'react-icons/lib/md/toc';
import SendFeedbackIcon from 'react-icons/lib/md/send';
import ViewFeedbackIcon from 'react-icons/lib/md/comment';
import AskQuery from 'react-icons/lib/fa/question';

import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';

export default class Sidebar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default sidebar removeMargin" role="navigation">
        <div>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse removePadding" id="bs-sidebar-navbar-collapse-1">
          <ul className="nav sidebar-nav">
            <Authenticated inGroup="Student">
                <li><Link to="/home" className="clearfix" activeClassName="sidebarOnActive"><span className="pull-left" >Home</span><HomeIcon className="pull-right vCenterIcon" size={20} /></Link></li>
                <li><Link to="/emner" className="clearfix" activeClassName="sidebarOnActive"><span className="pull-left" >Courses</span><CoursesIcon className="pull-right vCenterIcon" size={20} /></Link></li>
                <li><Link to="/SendFeedback" className="clearfix" activeClassName="sidebarOnActive"><span className="pull-left">Send feedback</span><SendFeedbackIcon className="pull-right vCenterIcon" size={20} /></Link> </li>
                <li> <Link to="/ViewFeedback" className="clearfix" activeClassName="sidebarOnActive"><span className="pull-left">View feedback</span ><ViewFeedbackIcon className="pull-right vCenterIcon" size={20} /></Link> </li>
                <li> <Link to="/ViewQueries" className="clearfix" activeClassName="sidebarOnActive"><span className="pull-left">View queries</span ><AskQuery className="pull-right vCenterIcon" size={23} /></Link> </li>
            </Authenticated>
            <Authenticated inGroup="Lecturer">
              <li><Link to="/home" className="clearfix" activeClassName="sidebarOnActive"><span className="pull-left" >Home</span><HomeIcon className="pull-right vCenterIcon" size={20} /></Link></li>
              <li><Link to="/emner" className="clearfix" activeClassName="sidebarOnActive"><span className="pull-left" >Courses</span><CoursesIcon className="pull-right vCenterIcon" size={20} /></Link></li>
              <li><Link to="/SendFeedback" className="clearfix" activeClassName="sidebarOnActive"><span className="pull-left">Send feedback</span><SendFeedbackIcon className="pull-right vCenterIcon" size={20} /></Link> </li>
              <li> <Link to="/ViewFeedback" className="clearfix" activeClassName="sidebarOnActive"><span className="pull-left">View feedback</span ><ViewFeedbackIcon className="pull-right vCenterIcon" size={20} /></Link> </li>
              <li> <Link to="/AskQuery" className="clearfix" activeClassName="sidebarOnActive"><span className="pull-left">Ask query</span ><AskQuery className="pull-right vCenterIcon" size={23} /></Link> </li>
            </Authenticated>

            <NotAuthenticated>
                <li><Link to="/home" className="clearfix" activeClassName="sidebarOnActive"><span className="pull-left" >Home</span><HomeIcon className="pull-right vCenterIcon" size={20} /></Link></li>
                <li><LoginLink className="clearfix" activeClassName="sidebarOnActive"><span className="pull-left">Login</span><LoginIcon className="pull-right vCenterIcon" size={20} /></LoginLink></li>
                <li><Link to="/register" className="clearfix" activeClassName="sidebarOnActive"><span className="pull-left">Create Account</span><CreateAccountIcon className="pull-right vCenterIcon" size={20} /></Link></li>
                <li><Link to="/forgot" className="clearfix" activeClassName="sidebarOnActive"><span className="pull-left">Forgot Password</span><ForgotPasswordIcon className="pull-right vCenterIcon" size={20} /></Link></li>
            </NotAuthenticated>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}
