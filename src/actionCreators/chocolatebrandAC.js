import { GET_CHOCOLATE_BRAND, GET_CHOCOLATE_BRAND_SUCCESS, GET_CHOCOLATE_BRAND_FAILURE, GET_BRAND_DETAILS, GET_BRAND_DETAILS_SUCCESS, GET_BRAND_ITEM, GET_BRAND_ITEM_SUCCESS, GET_BRAND_ITEM_FAILURE } from "../actionTypes/chocolateBrandAT";

//brand creators
export function getChocolateBrand(){
    return {type: GET_CHOCOLATE_BRAND}
}
export function getChocolateBrandSuccess(Brands){
    return {type: GET_CHOCOLATE_BRAND_SUCCESS,Brands}
}
export function getChocolateBrandFailure(error){
    return {type: GET_CHOCOLATE_BRAND_FAILURE,error}
}


//creators for branddetails
export function getBrandDetails(id){
    return {type: GET_BRAND_DETAILS, id}
}
export function getBrandDetailsSuccess(brandDetails){
    return{type: GET_BRAND_DETAILS_SUCCESS,brandDetails}
}
export function getBrandDetailsFailure(error){
    return{type: GET_CHOCOLATE_BRAND_FAILURE,error}
}

//brand item creators
export function getBrandItems(){
    return {type : GET_BRAND_ITEM, }
}
export function getBrandItemsSuccess(item){
    return { type: GET_BRAND_ITEM_SUCCESS,item}
}
export function getBrandItemFailure(error){
    return { type: GET_BRAND_ITEM_FAILURE,error}
}