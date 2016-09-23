import React from "react";
import {render} from "react-dom";
import {IndexRoute, Route, Router, hashHistory} from "react-router";
import {Container} from "flux/utils";

import App from "./container/app.js";

const routes = <Router history={hashHistory}>
        <Route path="/" component={Container.create(App)} >
        </Route>
  </Router>;

render(routes, document.querySelector("#app"));
