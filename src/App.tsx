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
        <Route path="/utis/config">
          <NoConfiguration
            url="https://gm-staging.forms4health.com/gm/singlepass/utis"
            displayName="Urinary Tract Infection"
          />
        </Route>
        <Route path="/preoperative-questionnaire/config">
          <NoConfiguration
            url="https://gm-staging.forms4health.com/gm/singlepass/preoperative-questionnaire"
            displayName="Preoperative Questionnaire"
          />
        </Route>
        <Route path="/">Page not found</Route>
      </Switch>
    </Router>
  );
}
