import React from 'react';
import { Link } from 'react-router';

import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';

export default class Sidebar extends React.Component {
  render() {
    return (
        <ul className="sidebar-nav">

            <Authenticated>
                <li><Link to="/emner" activeClassName="active">Courses</Link></li>
                <li><Link to="/SendFeedback" activeClassName="active">Send feedback</Link> </li>
                <li> <Link to="/ViewFeedback" activeClassName="active">View feedback</Link> </li>
            </Authenticated>

            <NotAuthenticated>
                <li><LoginLink activeClassName="active" /> </li>
                <li><Link to="/register" activeClassName="active">Create Account</Link></li>
                <li><Link to="/forgot">Forgot Password</Link></li>
            </NotAuthenticated>

        </ul>
    );
  }
}
