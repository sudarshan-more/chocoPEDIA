import { GET_CHOCOLATE_BRAND, GET_CHOCOLATE_BRAND_SUCCESS, GET_CHOCOLATE_BRAND_FAILURE } from "../actionTypes/chocolateBrandAT";

export function getChocolateBrand(){
    return {type: GET_CHOCOLATE_BRAND}
}
export function getChocolateBrandSuccess(){
    return {type: GET_CHOCOLATE_BRAND_SUCCESS}
}
export function getChocolateBrandFailure(){
    return {type: GET_CHOCOLATE_BRAND_FAILURE}
}