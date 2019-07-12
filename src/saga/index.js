import { takeLatest , all } from "@redux-saga/core/effects";
import { LOGIN } from "../actionTypes/LoginAT";
import { Login } from "../actionCreators/loginAC";
import { SIGNUP } from "../actionTypes/signupAT";
import { SignUp } from "../actionCreators/SIgnupAC";

export function* userWatcherSaga(){
    yield all([takeLatest(LOGIN,Login),takeLatest(SIGNUP,SignUp)])
}