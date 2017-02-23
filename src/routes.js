// LIbs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
//import ReactStormpath, { AuthenticatedRoute, LoginLink } from 'react-stormpath';

// components
import App from './components/App';
import Login from './components/Login';
import Student from './components/Student';
import Lecturer from './components/Lecturer';


const Routes = props => {
  return (
    <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Login} />
      <Route path="lecturer" component={Lecturer} />
      <Route path="student" component={Student} />
    </Route>
    <Route path="*">
      <IndexRedirect to="/" />
    </Route>
  </Router>
  )
}


export default Routes;
