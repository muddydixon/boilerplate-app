import dispatcher from "../dispatcher";
import {ReduceStore} from "flux/utils";
import Const from "../constants";

class SelfStore extends ReduceStore {
  getInitialState(){
    return null;
  }
  reduce(state, action){
    switch(action.type){
    case Const.USER_SIGNIN:
    case Const.USER_SIGNUP:
    case Const.USER_CURRENT:
      return action.user;
    case Const.USER_SIGNOUT:
      return null;
    default:
      return state;
    }
  }
}

export default new SelfStore(dispatcher);
