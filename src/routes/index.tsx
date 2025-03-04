import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Repository from "../pages/Repository";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repository/:repository+" exact component={Repository} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
