import React from "react";
import {render} from "react-dom";
import {IndexRoute, Route, Router, hashHistory} from "react-router";
import {Container} from "flux/utils";

import App from "./container/app.js";
import Authed from "./components/authed";
import Unauthed from "./components/unauthed";
import Signin from "./components/user-signin";
import Signup from "./components/user-signup";
import Signout from "./components/user-signout";

const routes = <Router history={hashHistory}>
        <Route path="/" component={Container.create(App)} >
          <Route component={Authed}>
            <Route path="signout" component={Signout} />
          </Route>
          <Route component={Unauthed}>
            <Route path="signin" component={Signin} />
            <Route path="signup" component={Signup} />
          </Route>
        </Route>
  </Router>;

render(routes, document.querySelector("#app"));
