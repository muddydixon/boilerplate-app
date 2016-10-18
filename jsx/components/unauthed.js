import React, {Component} from "react";
import UserAction from "../actions/user-action";

export default class Unauthed extends Component {
  componentWillMount(){
    if(this.props.data.self){
      this.context.router.push("/rules");
    }else{
      UserAction.fetchSelf();
    }
  }
  componentWillReceiveProps(){
    if(this.props.data.self){
      this.context.router.push("/rules");
    }else{
      UserAction.fetchSelf();
    }
  }
  render(){
    return <div>
      {this.props.children && React.cloneElement(this.props.children, {data: this.props.data})}
      </div>;
  }
};
Unauthed.contextTypes = {router: React.PropTypes.object.isRequired};
