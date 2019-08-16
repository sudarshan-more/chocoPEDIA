import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {} from './Search';
import { changeinput } from '../actionCreators/SIgnupAC';
import { connect } from 'react-redux';
import { logout } from '../actionCreators/loginAC';

function NavBar(props) {
	const handleChange = (value) => (e) => {
		props.dispatch(changeinput(value, e.target.value));
	};

	const handlelogout = (e) => {
		props.dispatch(logout());
	};

	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand>
					Chocopedia<NavLink to="/" />
				</Navbar.Brand>
				<Nav className="mr-auto">
					<span className="nav-link">
						<NavLink to="/" exact>
							HOME
						</NavLink>
					</span>
					<span className="nav-link">
						<NavLink to="/brands" exact>
							BRANDS
						</NavLink>
					</span>
					<span className="nav-link">
						{' '}
						<NavLink to="/chocolates" exact>
							CHOCOLATES
						</NavLink>
					</span>
				</Nav>
				{props.isLoggedIn && (
					<div>
						<Form inline>
							<span className="nav-link">
								{' '}
								<NavLink to="/login" exact>
									<Button onClick={handlelogout}>Logout</Button>
								</NavLink>
							</span>

							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2"
								onChange={handleChange('searchval')}
							/>
							<a href={`/search/${props.searchval}`} variant="outline-success">
								Search
							</a>
						</Form>
					</div>
				)}
			</Navbar>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		searchval: state.searchval,
		isLoggedIn: state.isLoggedIn
	};
}

export default connect(mapStateToProps)(NavBar);
