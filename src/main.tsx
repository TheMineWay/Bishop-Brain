import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import Providers from "./providers/providers";
import { setupI18n } from "./i18n/setup-i18n";

import "./index.pcss";
import "./reset.pcss";

setupI18n();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
