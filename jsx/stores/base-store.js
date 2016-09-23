import dispatcher from "../dispatcher";
import {ReduceStore} from "flux/utils";
import Const from "../constants";

class BaseStore extends ReduceStore {
  getInitialState(){
    return {};
  }
  reduce(state, action){
    switch(action.type){
    case Const.BASE_FETCH:
      return Object.assign({}, action.base);
    default:
      return state;
    }
  }
}

export default new BaseStore(dispatcher);
