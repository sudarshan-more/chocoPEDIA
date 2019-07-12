import { LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAILURE } from "../actionTypes/LoginAT";
import { CHANGE_INPUT_LOGIN } from "../actionTypes/LoginAT";

export function Login(email,password){
    return { type: LOGIN,email,password}
}
export function getLoginSuccess(name,message){
    return { type: GET_LOGIN_SUCCESS,}
}
export function getLoginFailure(email,message){
    return {type: GET_LOGIN_FAILURE,email,message}
}
export function changeinputlogin(fieldname , fieldvalue){
    return { type: CHANGE_INPUT_LOGIN , fieldname, fieldvalue}
}