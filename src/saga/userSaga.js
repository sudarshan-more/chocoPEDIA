import { put } from "react-saga/effects"
import { getLoginSuccess, getLoginFailure } from "../actionCreators/loginAC";

export function* login({email,password}){
    try{
        let usersResponse = yield fetch(`http://localhost:4000/users/?email=${email}`);
        let users = yield usersResponse.json();
       yield put(getLoginSuccess(users));       
    }catch(error){
        yield put(getLoginFailure(error))
    }
}
export function* signup({})