import {dispatch} from "../dispatcher";
import fetch from "isomorphic-fetch";
import BaseAction from "./base-action";
import Const from "../constants";

export default {
  signup(user){
    if(user.password !== user.confirm) return Promise.reject(new Error("password unmatched"));
    return fetch(`${Const.baseUrl}/users/signup`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(BaseAction.status).then((self)=>{
      dispatch({type: Const.SELF_SIGNUP, self});
      return self;
    });
  },
  signin(user){
    return fetch(`${Const.baseUrl}/users/signin`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(BaseAction.status).then((self)=>{
      dispatch({type: Const.SELF_SIGNIN, self});
      return self;
    });
  },
  signout(){
    return fetch(`${Const.baseUrl}/users/signout`, {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(BaseAction.status).then(()=>{
      dispatch({type: Const.SELF_SIGNOUT, user: null});
      return null;
    });
  },
  fetchSelf(){
    return fetch(`${Const.baseUrl}/users/self`, {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(BaseAction.status).then((self)=>{
      dispatch({type: "SELF_FETCH", self});
      return self;
    });
  },
};
