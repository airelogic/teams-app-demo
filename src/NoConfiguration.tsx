import React, { useEffect } from "react";
import * as microsoftTeams from "@microsoft/teams-js";
import { useTeams } from "./teams";

interface Props {
  url: string;
  displayName: string;
}

export default function App({ url, displayName }: Props): JSX.Element {
  const [{ context }] = useTeams();

  const onSaveHandler = (saveEvent: microsoftTeams.settings.SaveEvent) => {
    microsoftTeams.settings.setSettings({
      contentUrl: url,
      websiteUrl: url,
      suggestedDisplayName: displayName,
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
