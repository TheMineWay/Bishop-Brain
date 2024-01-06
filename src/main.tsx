import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import Providers from "./providers/providers";

import "./index.pcss";
import "./reset.pcss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
