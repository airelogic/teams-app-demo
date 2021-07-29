import React, { useEffect } from "react";
import * as microsoftTeams from "@microsoft/teams-js";
import { useTeams } from "./teams";

export default function App(): JSX.Element {
  const [{ context }] = useTeams();

  const onSaveHandler = (saveEvent: microsoftTeams.settings.SaveEvent) => {
    const url =
      "https://gm-staging.forms4health.com/gm/singlepass/consults-demo";

    microsoftTeams.settings.setSettings({
      contentUrl: url,
      websiteUrl: url,
      suggestedDisplayName: "GM Consultation Note",
    });
    saveEvent.notifySuccess();
  };

  useEffect(() => {
    if (context) {
      microsoftTeams.settings.registerOnSaveHandler(onSaveHandler);
      microsoftTeams.settings.setValidityState(true);
      microsoftTeams.appInitialization.notifySuccess();
    }
  }, [context]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          No configuration is required for this app - please press Save to
          continue
        </p>
      </header>
    </div>
  );
}
