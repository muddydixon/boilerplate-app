import React, {Component} from "react";

import UserAction from "../actions/user-action";

export default class Signout extends Component {
  componentWillMount(){
    UserAction.signout();
  }
  render(){
    return <div/>;
  }
};
Signout.contextTypes = {router: React.PropTypes.object.isRequired};
