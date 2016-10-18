import React, {Component} from "react";

import UserAction from "../actions/user-action";

export default class Signin extends Component {
  onSubmit(ev){
    ev.preventDefault();
    const username = this.refs.username.value.trim();
    const password = this.refs.password.value.trim();
    UserAction.signin({username, password}).then(()=>{
      this.context.router.push("/");
    });;
  }
  render(){
    return <div className="container">
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" ref="username" id="username" className="form-control" placeholder="user name"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" ref="password" id="password" className="form-control" placeholder="password" />
        </div>
        <button type="submit" className="btn btn-info">Singin</button>
      </form>
      </div>;
  }
};
Signin.contextTypes = {router: React.PropTypes.object.isRequired};
