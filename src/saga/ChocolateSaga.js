import {
  getChocolateSuccess,
  getChocolateFailure,
  getChocolateDetailsSuccess,
  getChocolateDetailsFailure
} from "../actionCreators/chocolateAC";
import { put } from "redux-saga/effects";
export function* getChocolates() {
  try {
    let chocolateResponse = yield fetch(`http://localhost:4000/chocolates`);
    let chocolates = yield chocolateResponse.json();
    yield put(getChocolateSuccess(chocolates));
  } catch (error) {
    yield put(getChocolateFailure(error));
  }
}

export function* getChocolateDetails({ id }) {
  try {
    let chocolateresponse = yield fetch(
      `http://localhost:4000/chocolates/?id=${id}`
    );
    let [chocolateDetail] = yield chocolateresponse.json();
    yield put(getChocolateDetailsSuccess(chocolateDetail));
  } catch (error) {
    yield put(getChocolateDetailsFailure(error));
  }
}
