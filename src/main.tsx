import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import Providers from "./providers/providers";
import { setupI18n } from "./i18n/setup-i18n";
import { initAnalytics } from "./utils/analytics/init-analytics";

import "./index.pcss";
import "./reset.pcss";
import { BrowserRouter } from "react-router-dom";

setupI18n();
initAnalytics();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="Bishop-Brain">
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
