import React, {Component} from "react";
import {Link} from "react-router";
import Const from "../constants";

export default class Header extends Component {
  render(){
    const {self} = this.props;
    const nav = self ?
            <nav className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
            <li><Link to="/signout">Signout</Link></li>
            </ul>
      </nav>:
      <nav className="collapse navbar-collapse">
      <ul className="nav navbar-nav">
      <li><Link to="/signin">Signin</Link></li>
      <li><Link to="/signup">Signup</Link></li>
      </ul>
      </nav>;

    return <header className="navbar navbar-static-top bs-docs-nav">
             <div className="container">
               <Link to="/" className="navbar-brand">
                 <i className="fa fa-cubes" />&nbsp;{Const.name || "BoilerPlate"}
               </Link>
               <nav className="collapse navbar-collapse">
                 <ul className="nav navbar-nav">
                 </ul>
               </nav>
             </div>
           </header>;
  }
}
