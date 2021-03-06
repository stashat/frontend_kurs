import React from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../auth/AuthService";
const Login = (props) => {
  function handleSubmit() {
    auth.login();
    props.updateAuthStatus(true);
    props.history.push("/");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username"></input>
      <button type="submit">Log in</button>
    </form>
  );
};
export default withRouter(Login);
