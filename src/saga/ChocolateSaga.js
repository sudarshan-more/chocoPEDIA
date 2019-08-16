import {
	getChocolateSuccess,
	getChocolateFailure,
	getChocolateDetailsSuccess,
	getChocolateDetailsFailure
} from '../actionCreators/chocolateAC';
import { put } from 'redux-saga/effects';
import { chocolatescall, chocolatecallwithid } from './ApiCalls';
export function* getChocolates() {
	try {
		let chocolateResponse = yield fetch(chocolatescall);
		let chocolates = yield chocolateResponse.json();
		yield put(getChocolateSuccess(chocolates));
	} catch (error) {
		yield put(getChocolateFailure(error));
	}
}

export function* getChocolateDetails({ id }) {
	try {
		let chocolateresponse = yield fetch(chocolatecallwithid + id);
		let [ chocolateDetail ] = yield chocolateresponse.json();
		yield put(getChocolateDetailsSuccess(chocolateDetail));
	} catch (error) {
		yield put(getChocolateDetailsFailure(error));
	}
}
