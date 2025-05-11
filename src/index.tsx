import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "utils/translations/i18n";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootElement: HTMLDivElement | null = document.getElementById("root") as HTMLDivElement;
if (!rootElement) {
  throw new Error("Root element not found");
}
const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
