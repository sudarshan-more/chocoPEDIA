import { GET_CHOCOLATE, GET_CHOCOLATE_SUCCESS, GET_CHOCOLATE_FAILURE, GET_CHOCOLATE_BRAND, GET_CHOCOLATE_BRAND_SUCCESS, GET_CHOCOLATE_BRAND_FAILURE, GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAILURE, GET_SIGNUP, GET_SIGNUP_SUCCESS, GET_SIGNUP_FAILURE } from "../actionTypes/chocolateAT";

export function getChocolates(){
    return {type: GET_CHOCOLATE};
}
export function getChocolateSuccess(){
    return { type: GET_CHOCOLATE_SUCCESS};
}
export function getChocolateFailure(){
    return { type: GET_CHOCOLATE_FAILURE};
}







