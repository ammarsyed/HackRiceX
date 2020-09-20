  
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./firebase";
import { AuthContext } from "./firebase";


const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/feed");
    } catch (error) {
      alert(error);
    }
  }, [history]);
  
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/feed" />;
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default withRouter(SignUp);