import produce from "immer";
import { LOGIN, GET_LOGIN_FAILURE, GET_LOGIN_SUCCESS, CHANGE_INPUT_LOGIN } from "../actionTypes/LoginAT";

const initialState={ email:"", password:"",isLoading:false}
export default (prevState = initialState, action)=>
produce(prevState, draft => {
    switch(action.type){
        case CHANGE_INPUT_LOGIN:
            draft[action.fieldname]= action.fieldvalue;
        case LOGIN:
            draft.isLoading=true;
            break;
        case GET_LOGIN_SUCCESS:
            draft.isLoading=false;
            draft.response= action.response
            break;
        case GET_LOGIN_FAILURE:
            draft.isLoading=false;
            draft.response= action.response
            draft.error = action.error
            break;

    }
})