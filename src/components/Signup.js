import React from 'react';
import { changeinput } from '../actionCreators/loginAC';
import { connect } from 'react-redux';
import { SignUp } from '../actionCreators/SIgnupAC';
import { Link } from 'react-router-dom';

function signup(props) {
	const handleChange = (value) => (e) => {
		props.dispatch(changeinput(value, e.target.value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { firstname, lastname, email, password } = props;
		const body = { firstname, lastname, email, password };
		props.dispatch(SignUp(body));
	};
	return (
		<div>
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
							onChange={handleChange('firstname')}
						/>
						{props.errormsg === 'First Name is Required' && <p>--{props.errormsg}</p>}
					</div>
					<div>
						<label htmlFor="lastname">Last Name</label>
						<input
							type="text"
							className="form-control"
							required
							name="lastname"
							placeholder="Enter your Last Name"
							onChange={handleChange('lastname')}
						/>
						{props.errormsg === 'Last Name is Required' && <p>--{props.errormsg}</p>}
					</div>
					<div>
						<label htmlFor="username">Email ID</label>
						<input
							type="text"
							className="form-control"
							required
							name="email"
							placeholder="Enter your User Name"
							onChange={handleChange('email')}
						/>
						{props.errormsg === 'Invalid Email' && <p>--{props.errormsg}</p>}
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="form-control"
							required
							name="password"
							placeholder="Give Password"
							onChange={handleChange('password')}
						/>
						{props.errormsg === 'Password is Requiredl' && <p>--{props.errormsg}</p>}
					</div>
					<div className="form-group">
						<button className="btn btn-primary">Register</button>

						<Link to="/login" className="btn btn-link">
							Cancel
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		loading: state.isLoading,
		firstname: state.firstname,
		lastname: state.lastname,
		email: state.email,
		password: state.password
	};
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(signup);
