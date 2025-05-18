import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "utils/translations/i18n";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootElement: HTMLDivElement | null = document.getElementById("root") as HTMLDivElement;
if (!rootElement) {
  throw new Error("Root element not found");
}
const DOMAIN: string = import.meta.env["VITE_AUTH0_DOMAIN"] || "";
const CLIENT_ID: string = import.meta.env["VITE_AUTH0_CLIENT_ID"] || "";
const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
