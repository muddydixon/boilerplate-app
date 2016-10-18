import React, {Component} from "react";

import UserAction from "../actions/user-action";

export default class Signup extends Component {
  onSubmit(ev){
    ev.preventDefault();
    const username = this.refs.username.value.trim(),
          password = this.refs.password.value.trim(),
          confirm  = this.refs.confirm.value.trim();

    UserAction.signup({username, password, confirm}).then(()=>{
      this.context.router.push("/");
    });
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
          <input type="password" ref="password" id="password" className="form-control" placeholder="password"/>
        </div>
        <div className="form-group">
          <label>Confirm</label>
          <input type="password" ref="confirm" id="confirm" className="form-control" placeholder="confirm" />
        </div>
        <button type="submit" className="btn btn-info">Signup</button>
      </form>
      </div>;
  }
};
Signup.contextTypes = {router: React.PropTypes.object.isRequired};
