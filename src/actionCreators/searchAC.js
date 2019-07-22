import { GET_SEARCH, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE } from "../actionTypes/searchAT";

export function getsearch(searchval){
    return{ type: GET_SEARCH,searchval}
}
export function getsearchsuccess(searchedchocolate,searchedbrand){
    return { type:GET_SEARCH_SUCCESS,searchedchocolate,searchedbrand}
}
export function getsearchfailure(error){
    return { type:GET_SEARCH_FAILURE,error}
}