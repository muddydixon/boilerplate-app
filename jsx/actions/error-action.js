import {dispatch} from "../dispatcher";
import fetch from "isomorphic-fetch";
import Const from "../constants";

export default {
  dismiss(){
    return dispatch({type: "ERROR", error: null});
  },
  error(err){
    return dispatch({type: "ERROR", error: err});
  }
};
