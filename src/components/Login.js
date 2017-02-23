// Libs
import React, { Component } from 'react';
import { Link } from 'react-router';
import { PageHeader } from 'react-bootstrap';

class Login extends Component {

  render() {
    return (
      <div className="row">
        <PageHeader>THIS IS THE LOGIN SITE</PageHeader>
        <div className="col-xs-6 col-xs-offset-3">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-default" disabled>Submit</button>
            </form>
        </div>
        <div className="col-md-6 col-md-offset-3 m-t-30">
          <Link to="/lecturer"><button className="btn btn-primary btn-lg" type="button">Lecturer</button></Link>
          <Link to="/student"><button className="btn btn-primary btn-lg" type="button">Student</button></Link>
        </div>
      </div>
    );
  }
}

export default Login;
