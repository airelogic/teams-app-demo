import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import App from "./App";

// This script checks to see if a redirect is present in the query string,
// converts it back into the correct url. ,
// which won't cause the browser to attempt to load the new url.
// When the single page app is loaded further down in this file,
// the correct url will be waiting in the browser's history for
// the single page app to route accordingly.
(function () {
  function getQuerystring(key: string): string | undefined {
    const query = window.location.search.substring(1);

    for (const parameter of query.split("&")) {
      const pair = parameter.split("=");
      if (pair[0] == key) {
        return decodeURIComponent(pair[1]);
      }
    }
  }

  const spaUrl = getQuerystring("spaUrl");
  if (typeof spaUrl === "string" && spaUrl.length > 0) {
    window.history.replaceState(null, "", spaUrl);
  }
})();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
