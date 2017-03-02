// Libs
import React, { Component } from 'react';
import { Link } from 'react-router';

import Button from 'react-bootstrap/lib/Button'
import Panel from 'react-bootstrap/lib/Panel'
import { FormControl, Checkbox } from 'react-bootstrap';



class Login extends Component {

  render() {
    const title = 'Log In';
    return (
      <div className="App">
        <div className="text-center">
          <h1 className="login-brand-text">eduBOT</h1>
          <h3 className="text-color">An automatic feedback systems</h3>

        </div>

        <Panel header={<h3>Please Sign In</h3>} className="login-panel">
          <div className="form-group">
            <FormControl
              id="username"
              type="text"
              className="form-control"
              placeholder="Username"
              name="name"
            />
          </div>
          <div className="form-group">
              <FormControl
                id="password"
                className="form-control"
                placeholder="Password"
                type="password"
                name="password"
              />
          </div>
          <Checkbox label="Remember Me" > Remember Me </Checkbox>
          <Button type="submit" id="login" bsSize="large" bsStyle="success" block>Login</Button>
          <Button type="submit" id="register" bsSize="large" bsStyle="danger" block>Register</Button>
        </Panel>
        <div className="col-md-6 col-md-offset-3 m-t-30">
          <Link to="/lecturer"><button className="btn btn-primary btn-lg" type="button">Lecturer</button></Link>
          <Link to="/student"><button className="btn btn-primary btn-lg" type="button">Student</button></Link>
        </div>
      </div>
    );
  }
}

export default Login;
