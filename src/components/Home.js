import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import style from '../css/Home.css';

function Home(props) {
	if (!props.isLoggedIn) {
		alert('Please login ');
		return <Redirect to="/login" />;
	}
	return (
		<div>
			<div className={style.content}>
				<h1 className={style.contentinside}>Hi !</h1>
				<p>You're logged in to chocopedia!!</p>
			</div>
		</div>
	);
}
function mapStateToProps(state) {
	return {
		isLoggedIn: state.isLoggedIn
	};
}
export default connect(mapStateToProps)(Home);
