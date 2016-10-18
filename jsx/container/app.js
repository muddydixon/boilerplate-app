import React, {Component} from "react";

import ErrorStore from "../stores/error-store";
import SelfStore from "../stores/self-store";
import UserAction from "../actions/user-action";

import Header from "../components/header";
import Error from "../components/error";

export default class App extends Component {
  static getStores(){
    return [SelfStore];
  }

  static calculateState(){
    return {
      self: SelfStore.getState()
    };
  }
  componentDidMount(){
    // UserAction.fetchSelf();
  }
  render(){
    console.log(this.state);
    return <div>
      <Header self={this.state.self}/>
      <Error error={this.state.error }/>
      {this.props.children && React.cloneElement(this.props.children, {data: this.state})}
      </div>;
  }
}
