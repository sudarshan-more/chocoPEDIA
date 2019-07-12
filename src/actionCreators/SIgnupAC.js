import { SIGNUP, GET_SIGNUP_SUCCESS, GET_SIGNUP_FAILURE, CHANGE_INPUT_SIGNUP } from "../actionTypes/signupAT";

export function SignUp(){
    return { type: SIGNUP}
}
export function getSignUpSuccess(){
    return { type: GET_SIGNUP_SUCCESS}
}
export function getSignUpFailure(){
    return { type: GET_SIGNUP_FAILURE}
}
export function changeinputsignup(fieldname, fieldvalue){
    return {type: CHANGE_INPUT_SIGNUP,fieldname, fieldvalue}
}