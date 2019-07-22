import { SIGNUP, GET_SIGNUP_SUCCESS, GET_SIGNUP_FAILURE} from "../actionTypes/signupAT";
import { CHANGE_INPUT } from "../actionTypes/LoginAT";

export function SignUp(payload){
    return { type: SIGNUP,payload}
}
export function getSignUpSuccess(user){
    return { type: GET_SIGNUP_SUCCESS,user}
}
export function getSignUpFailure(error){
    return { type: GET_SIGNUP_FAILURE,error}
}
export function changeinput(fieldname, fieldvalue){
    return {type: CHANGE_INPUT,fieldname, fieldvalue}
}