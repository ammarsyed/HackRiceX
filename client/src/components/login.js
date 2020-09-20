// import React, { Component } from "react";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import InputBox from './InputBox';

import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import {app} from "./firebase";
import { AuthContext } from "./firebase";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
/*
class Login extends Component {
    render() {
        return (

            <div style={{width: "60vh", zoom: "1.3"}} class="mx-auto">
                
                <Form>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter username"></Form.Control>
                        <Form.Text className="text-muted">
                            
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"></Form.Control>
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicRemember" style={{marginBottom: '0'}}>
                        <Form.Check type="checkbox" label="Remember Me"/>
                    </Form.Group>

                    <a href={'/profile'} style={{padding: '0', fontSize: ".7rem"}} class="text-primary">Create an Account</a>

                    <div class="text-center">
                        <Button href={'/'} variant="primary" type="submit">Submit</Button>{' '}
                    </div>
                </Form>

            </div>

        );
    }
}

export default Login;
*/