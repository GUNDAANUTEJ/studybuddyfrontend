import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <>
    <Auth0Provider
      domain="studybuddyauth.us.auth0.com"
      clientId="mwYt1WFScuj8zocxce1KsS2A2i2VGhG5"
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </>,
  document.getElementById("root")
);
