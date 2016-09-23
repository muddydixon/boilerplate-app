import React, {Component} from "react";

import BaseStore from "../stores/base-store";
import BaseAction from "../actions/base-action";

import Header from "../components/header";

export default class App extends Component {
  static getStores(){
    return [BaseStore];
  }

  static calculateState(){
    return {
      base: BaseStore.getState()
    };
  }
  componentDidMount(){
    // BaseAction.fetchAll();
  }
  render(){
    return <div>
      <Header />
      {this.props.children && React.cloneElement(this.props.children, {data: this.state})}
      </div>;
  }
}
