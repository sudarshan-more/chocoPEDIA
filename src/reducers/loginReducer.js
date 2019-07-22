import produce from "immer";
import {
  LOGIN,
  GET_LOGIN_FAILURE,
  GET_LOGIN_SUCCESS,
  GET_USERS,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  CHANGE_INPUT
} from "../actionTypes/LoginAT";
import {
  GET_CHOCOLATE_BRAND,
  GET_CHOCOLATE_BRAND_SUCCESS,
  GET_CHOCOLATE_BRAND_FAILURE,
  GET_BRAND_DETAILS,
  GET_BRAND_DETAILS_SUCCESS,
  GET_BRAND_DETAILS_FAILURE
} from "../actionTypes/chocolateBrandAT";

import {
  GET_CHOCOLATE,
  GET_CHOCOLATE_SUCCESS,
  GET_CHOCOLATE_FAILURE,
  GET_CHOCOLATE_DETAILS,
  GET_CHOCOLATE_DETAILS_SUCCESS,
  GET_CHOCOLATE_DETAILS_FAILURE
} from "../actionTypes/chocolateAT";

import {
  SIGNUP,
  GET_SIGNUP_SUCCESS,
  GET_SIGNUP_FAILURE
} from "../actionTypes/signupAT";
import {
  GET_SEARCH,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAILURE
} from "../actionTypes/searchAT";

const initialState = {
  searchval: "",
  searchedbrand: [],
  searchedchocolate: [],
  isLoggedIn: localStorage.getItem("login"),
  brandDetails: [],
  chocolateDetail: {},
  errormsg: "",
  email: "",
  password: "",
  isLoading: false,
  Brands: [],
  chocolates: [],
  users: [],
  types: [],
  firstname: "",
  lastname: "",
  loginemail: "",
  loginpassword: "",
  user: {}
};

export default (prevState = initialState, action) => {
  return produce(prevState, draft => {
    switch (action.type) {
      //inputfield
      case CHANGE_INPUT:
        draft[action.fieldname] = action.fieldvalue;
        break;
      //login
      case LOGIN:
        draft.isLoading = true;
        localStorage.setItem("login", true);
        break;
      case GET_LOGIN_SUCCESS:
        draft.isLoading = false;
        draft.isLoggedIn = true;
        break;
      case GET_LOGIN_FAILURE:
        draft.isLoading = false;
        draft.isLoggedIn = false;
        draft.response = action.response;
        draft.error = action.error;
        break;

      //chocolate brands
      case GET_CHOCOLATE_BRAND:
        draft.isLoading = true;
        break;
      case GET_CHOCOLATE_BRAND_SUCCESS:
        draft.Brands = action.Brands;
        break;
      case GET_CHOCOLATE_BRAND_FAILURE:
        draft.error = action.error;
        break;

      //for chocolates
      case GET_CHOCOLATE:
        draft.isLoading = true;
        break;
      case GET_CHOCOLATE_SUCCESS:
        draft.chocolates = action.chocolates;
        draft.isLoading = false;
        console.log("choco2");
        break;
      case GET_CHOCOLATE_FAILURE:
        draft.isLoading = false;
        break;

      //signup

      case SIGNUP:
        break;
      case GET_SIGNUP_SUCCESS:
        draft.user = action.user;
        draft.isLoading = true;
        break;
      case GET_SIGNUP_FAILURE:
        draft.error = action.error;

      //branddetails
      case GET_BRAND_DETAILS:
        break;
      case GET_BRAND_DETAILS_SUCCESS:
        draft.brandDetails = action.brandDetails;
        break;
      case GET_BRAND_DETAILS_FAILURE:
        draft.error = action.error;

      //chocolatedetail
      case GET_CHOCOLATE_DETAILS:
        break;
      case GET_CHOCOLATE_DETAILS_SUCCESS:
        draft.chocolateDetail = action.chocolateDetail;
        break;
      case GET_CHOCOLATE_DETAILS_FAILURE:
        draft.error = action.error;
        break;

      //user
      case GET_USERS:
        break;
      case GET_USER_SUCCESS:
        draft.user = action.user;
        break;
      case GET_USER_FAILURE:
        draft.error = action.error;
        break;

      //searcheditems
      case GET_SEARCH:
        break;
      case GET_SEARCH_SUCCESS:
        draft.searchedbrand = action.searchedbrand;
        draft.searchedchocolate = action.searchedchocolate;
      case GET_SEARCH_FAILURE:
        draft.error = action.error;
    }
  });
};
