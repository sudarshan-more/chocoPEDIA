import { takeLatest, all } from "@redux-saga/core/effects";
import { LOGIN, GET_USERS } from "../actionTypes/LoginAT";

import { SIGNUP } from "../actionTypes/signupAT";

import {
  GET_CHOCOLATE,
  GET_CHOCOLATE_DETAILS
} from "../actionTypes/chocolateAT";
import { getChocolateBrand, getBrandDetails } from "./brandSaga";
import {
  GET_CHOCOLATE_BRAND,
  GET_BRAND_DETAILS
} from "../actionTypes/chocolateBrandAT";
import { getChocolates, getChocolateDetails } from "../saga/ChocolateSaga";
import { loginsaga, signupsaga, usersaga } from "./loginSaga";
import { GET_SEARCH } from "../actionTypes/searchAT";
import { searchsaga } from "./SearchSaga";

export function* userWatcherSaga() {
  yield all([
    takeLatest(LOGIN, loginsaga),
    takeLatest(SIGNUP, signupsaga),
    takeLatest(GET_CHOCOLATE, getChocolates),
    takeLatest(GET_CHOCOLATE_BRAND, getChocolateBrand),
    takeLatest(GET_BRAND_DETAILS, getBrandDetails),
    takeLatest(GET_USERS, usersaga),
    takeLatest(GET_SEARCH, searchsaga),
    takeLatest(GET_CHOCOLATE_DETAILS, getChocolateDetails)
  ]);
}
