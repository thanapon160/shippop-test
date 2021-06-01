import React from "react";
import roles from "../config/roles";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import NotFound from "../pages/NotFoundPage";

export default function Routes(props) {

  return (
    <BrowserRouter>
      <Switch>
        {roles["GUEST"].map(({ path, page: PageComponent }, idx) => {
          return (
            <Route key={idx} path={path}>
              <PageComponent />
            </Route>
          );
        })}
        <Redirect to="/home" />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}