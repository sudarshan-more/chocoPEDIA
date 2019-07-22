import { GET_CHOCOLATE, GET_CHOCOLATE_SUCCESS, GET_CHOCOLATE_FAILURE, GET_CHOCOLATE_BRAND, GET_CHOCOLATE_BRAND_SUCCESS, GET_CHOCOLATE_BRAND_FAILURE, GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAILURE, GET_SIGNUP, GET_SIGNUP_SUCCESS, GET_SIGNUP_FAILURE, GET_CHOCOLATE_DETAILS, GET_CHOCOLATE_DETAILS_SUCCESS, GET_CHOCOLATE_DETAILS_FAILURE, GET_CHOCOLATE_ITEM, GET_CHOCOLATE_ITEM_SUCCESS, GET_CHOCOLATE_ITEM_FAILURE } from "../actionTypes/chocolateAT";



//chocolates 
export function getChocolates(){
    return {type: GET_CHOCOLATE};
}
export function getChocolateSuccess(chocolates){
    return { type: GET_CHOCOLATE_SUCCESS, chocolates};
}
export function getChocolateFailure(error){
    return { type: GET_CHOCOLATE_FAILURE, error};
}

//chocolate details creators 
export function getChocolateDetails(id){
    return { type : GET_CHOCOLATE_DETAILS,id}
}
export function getChocolateDetailsSuccess(chocolateDetail){
    return { type : GET_CHOCOLATE_DETAILS_SUCCESS, chocolateDetail}
}

export function getChocolateDetailsFailure(error){
    return { type : GET_CHOCOLATE_DETAILS_FAILURE,error}
}

//chocolate items creators
export function getChocolateItem(){
    return { type: GET_CHOCOLATE_ITEM}
}
export function getChocolateItemSuccess(item){
    return { type : GET_CHOCOLATE_ITEM_SUCCESS,item}
}
export function getChocolateItemFailure(error){
    return { type : GET_CHOCOLATE_ITEM_FAILURE,error}
}




