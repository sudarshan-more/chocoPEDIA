import { put } from 'redux-saga/effects';
import { getsearchsuccess, getsearchfailure } from '../actionCreators/searchAC';
import { chocsearch, brandsearch } from './ApiCalls';

export function* searchsaga(action) {
	try {
		let searchChocResponse = yield fetch(chocsearch + action.searchval);
		let chocresp = yield searchChocResponse.json();
		let searchBrandResponse = yield fetch(brandsearch + action.searchval);
		let brandresp = yield searchBrandResponse.json();
		yield put(getsearchsuccess(chocresp, brandresp));
	} catch (error) {
		yield put(getsearchfailure(error));
	}
}
