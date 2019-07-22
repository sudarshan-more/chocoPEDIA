import { put } from "redux-saga/effects";
import { getLoginSuccess, getLoginFailure } from "../actionCreators/loginAC";
import { getSignUpSuccess, getSignUpFailure } from "../actionCreators/SIgnupAC";
export function* loginsaga(body) {
  try {
    const { loginemail, loginpassword } = body.user;
    let userResponse = yield fetch(
      `http://localhost:4000/users?email=${loginemail}`
    );
    const [res] = yield userResponse.json();
    if (res.email === loginemail && res.password === loginpassword) {
      alert("logged in ");
      yield put(getLoginSuccess());
    }
  } catch (error) {
    alert("enter correct credentails");
    yield put(getLoginFailure(error));
  }
}

export function* signupsaga(action) {
  try {
    console.log(action.payload);
    const { firstname, lastname, email, password } = action.payload;
    const body = { firstname, lastname, email, password };
    console.log("////", body);
    const submitResponse = yield fetch("http://localhost:4000/users", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const user = yield submitResponse.json();
    yield put(getSignUpSuccess(user));
  } catch (error) {
    yield put(getSignUpFailure(error));
  }
}

export function* usersaga(user) {
  try {
    let usersResponse = yield fetch(`http://localhost:4000/users`);
    const users = yield usersResponse.json();
    yield put(getLoginSuccess(users));
  } catch (error) {
    yield put(getLoginFailure(error));
  }
}
