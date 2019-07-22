import {
  getChocolateBrandSuccess,
  getChocolateBrandFailure,
  getBrandDetailsSuccess,
  getBrandDetailsFailure
} from "../actionCreators/chocolatebrandAC";
import { put } from "redux-saga/effects";

export function* getChocolateBrand() {
  try {
    let brandsresponse = yield fetch(`http://localhost:4000/brands`);
    let Brands = yield brandsresponse.json();
    yield put(getChocolateBrandSuccess(Brands));
  } catch (error) {
    yield put(getChocolateBrandFailure(error));
  }
}

export function* getBrandDetails(action) {
  try {
    let brandsresponse = yield fetch(
      `http://localhost:4000/chocolates?brandId=${action.id}`
    );
    let Brands = yield brandsresponse.json();
    yield put(getBrandDetailsSuccess(Brands));
  } catch (error) {
    yield put(getBrandDetailsFailure(error));
  }
}
