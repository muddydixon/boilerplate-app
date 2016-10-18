import React, {Component} from "react";
import ErrorAction from "../actions/error-action";

export default class Error extends Component {
  onDismiss(){
    ErrorAction.dismiss();
  }
  render(){
    const {error} = this.props;
    if(!error) return null;
    setTimeout(this.onDismiss, 5000);
    return <div className="container alert alert-danger">
      <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.onDismiss.bind(this)}><span aria-hidden="true">&times;</span></button>
      {error.message}
    </div>;
  }
}
