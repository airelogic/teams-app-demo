import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoConfiguration from "./NoConfiguration";

export default function (): JSX.Element {
  return (
    <Router basename="/teams-app-demo">
      <Switch>
        <Route exact path="/">
          <NoConfiguration
            url="https://gm-staging.forms4health.com/gm/singlepass/consults-demo"
            displayName="Consultation Note"
          />
        </Route>
        <Route path="/consultation-note/config">
          <NoConfiguration
            url="https://gm-staging.forms4health.com/gm/singlepass/consults-demo"
            displayName="Consultation Note"
          />
        </Route>
        <Route path="/">Page not found</Route>
      </Switch>
    </Router>
  );
}
