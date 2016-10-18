import dispatcher from "../dispatcher";
import {ReduceStore} from "flux/utils";
import Const from "../constants";

class ErrorStore extends ReduceStore {
  getInitialState(){
    return null;
  }
  reduce(state, action){
    switch(action.type){
    case Const.ERROR:
      return action.error;
    default:
      return state;
    }
  }
}

export default new ErrorStore(dispatcher);
