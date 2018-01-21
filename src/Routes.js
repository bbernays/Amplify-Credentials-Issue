import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import AppliedRoute from "./components/AppliedRoute";


export default ({ childProps }) =>
  <Switch>
    <Route component={Home} props={childProps}/>
  </Switch>;
