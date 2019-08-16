import {
	getChocolateBrandSuccess,
	getChocolateBrandFailure,
	getBrandDetailsSuccess,
	getBrandDetailsFailure
} from '../actionCreators/chocolatebrandAC';
import { put } from 'redux-saga/effects';
import { brandscall, brandwithidcall } from './ApiCalls';

export function* getChocolateBrand() {
	try {
		let brandsresponse = yield fetch(brandscall);
		let Brands = yield brandsresponse.json();
		yield put(getChocolateBrandSuccess(Brands));
	} catch (error) {
		yield put(getChocolateBrandFailure(error));
	}
}

export function* getBrandDetails(action) {
	try {
		let brandsresponse = yield fetch(brandwithidcall + action.id);
		let Brands = yield brandsresponse.json();
		yield put(getBrandDetailsSuccess(Brands));
	} catch (error) {
		yield put(getBrandDetailsFailure(error));
	}
}
