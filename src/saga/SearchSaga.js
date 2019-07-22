import {put} from "redux-saga/effects"
import { getsearchsuccess, getsearchfailure } from "../actionCreators/searchAC";

export function* searchsaga(action){
  try{
    debugger;
     
        let searchChocResponse = yield fetch(`http://localhost:4000/chocolates?q=${action.searchval}`);
        let chocresp = yield searchChocResponse.json();
        let searchBrandResponse = yield fetch(`http://localhost:4000/brands?q=${action.searchval}`);
        let brandresp = yield searchBrandResponse.json();
        // let brandresp=[{0:"Hello"}]
        yield put (getsearchsuccess(chocresp,brandresp));
      
     }catch(error){
    yield put (getsearchfailure(error))

  }
}