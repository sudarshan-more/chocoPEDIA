import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Login, changeinput } from "../actionCreators/loginAC";
import { connect } from "react-redux";

function login(props) {
  const handleChange = value => e => {
    props.dispatch(changeinput(value, e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(props);
    const { loginemail, loginpassword } = props;
    const body = { loginemail, loginpassword };
    console.log(body);
    props.dispatch(Login(body));
  };

  return (
    <div className="col-md-6 col-md-offset-3">
      <h2>Login</h2>
      {props.isLoggedIn && <Redirect to="/home" />}
      <form name="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Username</label>
          <input
            type="email"
            className="form-control"
            name="loginemail"
            onChange={handleChange("loginemail")}
          />
          {props.errormsg === "Invalid Email" && <p>--{props.errormsg}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="loginpassword"
            onChange={handleChange("loginpassword")}
          />
          {props.errormsg === "Invalid password and email" && (
            <p>--{props.errormsg}</p>
          )}
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Login
          </button>

          <Link to="/signup" className="btn btn-link">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loginemail: state.loginemail,
    loginpassword: state.loginpassword,
    errormsg: state.errormsg,
    isLoggedIn: state.isLoggedIn
  };
}
export default connect(mapStateToProps)(login);
