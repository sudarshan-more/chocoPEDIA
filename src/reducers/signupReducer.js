import produce from "immer";
import { SIGNUP, GET_SIGNUP_SUCCESS, GET_SIGNUP_FAILURE } from "../actionTypes/signupAT";


export default (prevState = initialState, action)=>
produce(prevState, draft => {
    switch(action.type){
        case SIGNUP:
            break;
        case GET_SIGNUP_SUCCESS:
            break;
        case GET_SIGNUP_FAILURE:
            break;

    }
})