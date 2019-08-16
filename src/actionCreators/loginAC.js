import {
	LOGIN,
	GET_LOGIN_SUCCESS,
	GET_LOGIN_FAILURE,
	GET_USERS,
	ERROR_MSG,
	GET_USER_SUCCESS,
	GET_USER_FAILURE,
	LOGOUT
} from '../actionTypes/LoginAT';
import { CHANGE_INPUT } from '../actionTypes/LoginAT';

//login creators
export function Login(user) {
	return {
		type: LOGIN,
		user
	};
}
export function getLoginSuccess(user) {
	return {
		type: GET_LOGIN_SUCCESS,
		user
	};
}
export function getLoginFailure(error) {
	return {
		type: GET_LOGIN_FAILURE,
		error
	};
}

//changing input
export function changeinput(fieldname, fieldvalue) {
	return {
		type: CHANGE_INPUT,
		fieldname,
		fieldvalue
	};
}

//logout
export function logout(user) {
	return {
		type: LOGOUT,
		user
	};
}

//user
export function getUsers() {
	return {
		type: GET_USERS
	};
}
export function getUserSuccess(user) {
	return {
		type: GET_USER_SUCCESS,
		user
	};
}
export function getUserFailure(error) {
	return {
		type: GET_USER_FAILURE,
		error
	};
}
export function errormsg(message) {
	return {
		type: ERROR_MSG,
		message
	};
}
