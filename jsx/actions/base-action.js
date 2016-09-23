import {dispatch} from "../dispatcher";
import fetch from "isomorphic-fetch";
import Const from "../constants";

export default {
  fetch(){
    return fetch(`${Const.baseUrl}/base`, {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res)=> res.json()).then((config)=>{
      dispatch({type: "BASE_FETCH", config});
      return config;
    }).catch((err)=>{
      dispatch({type: "ERROR", err});
    });
  }
};
