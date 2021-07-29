/**
Simplified version of https://github.com/wictorwilen/msteams-react-base-component
 
Copyright (c) Microsoft Corporation. All rights reserved. 

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import { useEffect, useState } from "react";
import { unstable_batchedUpdates as batchedUpdates } from "react-dom";
import * as microsoftTeams from "@microsoft/teams-js";

function checkInTeams(): boolean {
  // eslint-disable-next-line dot-notation
  const microsoftTeamsLib = microsoftTeams || window["microsoftTeams"];

  if (!microsoftTeamsLib) {
    return false; // the Microsoft Teams library is for some reason not loaded
  }

  if (
    (window.parent === window.self && (window as any).nativeInterface) ||
    window.name === "embedded-page-container" ||
    window.name === "extension-tab-frame"
  ) {
    return true;
  }
  return false;
}

export function useTeams(): [
  { context: microsoftTeams.Context | undefined; inTeams: boolean | undefined }
] {
  const [inTeams, setInTeams] = useState<boolean | undefined>(undefined);
  const [context, setContext] = useState<microsoftTeams.Context>();

  useEffect(() => {
    if (checkInTeams()) {
      microsoftTeams.initialize(() => {
        microsoftTeams.getContext((context) => {
          batchedUpdates(() => {
            setInTeams(true);
            setContext(context);
          });
        });
      });
    } else {
      setInTeams(false);
      microsoftTeams.initialize();
    }
  }, []);

  return [{ context, inTeams }];
}
