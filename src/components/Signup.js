import React, { Component } from "react";
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
import { errormsg, getUsers, changeinput } from "../actionCreators/loginAC";
import { connect } from "react-redux";
import { SignUp } from "../actionCreators/SIgnupAC";
import { Link } from "react-router-dom";

//import {signupvalidation} from "../components/signupvalidation"

//import axios from 'axios';

function signup(props) {
  const handleChange = value => e => {
    props.dispatch(changeinput(value, e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    //console.log(props)
    const { firstname, lastname, email, password } = props;
    const body = { firstname, lastname, email, password };
    console.log(body);
    props.dispatch(SignUp(body));
  };
  return (
    <>
      <div className="col-md-6 col-md-offset-3">
        <h2>Register</h2>
        <form name="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="form-control"
              required
              name="firstname"
              placeholder="Enter your First Name"
              onChange={handleChange("firstname")}
            />
            {props.errormsg === "First Name is Required" && (
              <p>--{props.errormsg}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              required
              name="lastname"
              placeholder="Enter your Last Name"
              onChange={handleChange("lastname")}
            />
            {props.errormsg === "Last Name is Required" && (
              <p>--{props.errormsg}</p>
            )}
          </div>
          <div>
            <label htmlFor="username">Email ID</label>
            <input
              type="text"
              className="form-control"
              required
              name="email"
              placeholder="Enter your User Name"
              onChange={handleChange("email")}
            />
            {props.errormsg === "Invalid Email" && <p>--{props.errormsg}</p>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              required
              name="password"
              placeholder="Give Password"
              onChange={handleChange("password")}
            />
            {props.errormsg === "Password is Requiredl" && (
              <p>--{props.errormsg}</p>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>

            <Link to="/login" className="btn btn-link">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    // error_msg: state.errorMessage,
    loading: state.isLoading,
    firstname: state.firstname,
    lastname: state.lastname,
    email: state.email,
    password: state.password
    //users: state.users
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(signup);




// function Signup (props) {

//     const handleChange = value => e => {
//       props.dispatch(changeinput(value,e.target.value));
//     }

//   const handleClick = e => {
//     e.preventDefault();
//     props.dispatch(SignUp(props))
//   }

//     const regexp = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
//     if (props.firstName === "") {
//       props.dispatch(errormsg("First Name is Required"));
//       return "false";
//     }
//     if (props.lastName === "") {
//       props.dispatch(errormsg("Last Name is Required"));
//       return "false";
//     }
//     if (!regexp.test(props.email)) {
//       props.dispatch(errormsg("Invalid Email"));
//       return false;
//     }
//     if (props.password === "") {
//       props.dispatch(errormsg("Password is Required"));

//       return false;
//     }
//     if (props.confirmpassword === "") {
//       props.dispatch(errormsg("Wrong Confirm Passord"));
//       return false;
//     }
//     if (props.password !== props.confirmpassword) {
//       props.dispatch(errormsg("passwords doesn't match"));
//       return false;
//     }
    
//     return (
//       <>
//       <form align="center" name="signup" onSubmit={handleClick} >
//       <div>
//         <MuiThemeProvider>
//           <div>
//           <AppBar 
//              title="Register"
//            />
//            <TextField
//              hintText="Enter your First Name"
//              floatingLabelText="First Name" required
//              id="firstname"
//              onChange = {handleChange("FirstName")}
//              />
//              {this.props.errormsg === "First Name is Required" && (<p>--{this.props.errormsg}</p>)}
//            <br/>
//            <TextField
//              hintText="Enter your Last Name"
//              floatingLabelText="Last Name" required
//              id="lastname"
//              onChange = {handleChange("LastName")}
//              />
//              {this.props.errormsg === "Last Name is Required" && (<p>--{this.props.errormsg}</p>)}
//            <br/>
//            <TextField
//              hintText="Enter your Email"
//              type="email"
//              floatingLabelText="Email" required
//              id="email"
//              onChange = {handleChange("email")}
//              />
//              {this.props.errormsg === "Invalid Email" && (<p>--{this.props.errormsg}</p>)}
//            <br/>
//            <TextField
//              type = "password"
//              hintText="Enter your Password"
//              id="password"
//              floatingLabelText="Password" required
//              onChange = {handleChange("password")}
//              />
//              {this.props.errormsg === "Password is Requiredl" && (<p>--{this.props.errormsg}</p>)}
//              <br/>
//              <TextField
//              type = "password"
//              hintText="renter your Password"
//              id="confirmpassword"
//              floatingLabelText="confirmPassword" required
//              onChange = {handleChange("confirmpassword")}
//              />
//              {this.props.errormsg === "passwords doesn't match" && (<p>--{this.props.errormsg}</p>)}
//            <br/>
//            <RaisedButton label="Submit" primary={true} style={style} />
//           </div>
//          </MuiThemeProvider>
//       </div>
//       </form>
//       </>
//     );
//   }

// const style = {
//   margin: 15,
// };
// function mapStateToProps(state) {
//   return {
//     error_msg: state.errorMessage,
//     loading: state.isLoading,
//     firstname: state.firstname,
//     lastname: state.lastname,
//     email: state.email,
//     password: state.password,
//     confirmpassword: state.confirmpassword,
//   };
// }

// const connectedComponent = connect(mapStateToProps);

// export default connectedComponent(Signup);