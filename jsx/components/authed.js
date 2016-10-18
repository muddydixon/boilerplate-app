import React, {Component} from "react";

export default class Authed extends Component {
  componentWillMount(){
    if(!this.props.data.self){
      this.context.router.push("/signin");
    }else{
    }
  }
  componentWillReceiveProps(){
    if(!this.props.data.self){
      this.context.router.push("/signin");
    }
  }
  render(){
    return <div>
      {this.props.children && React.cloneElement(this.props.children, {data: this.props.data})}
      </div>;
  }
};
Authed.contextTypes = {router: React.PropTypes.object.isRequired};
