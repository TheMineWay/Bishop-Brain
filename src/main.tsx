import React from "react";
import ReactDOM from "react-dom/client";
import "./index.pcss";
import App from "./app";
import Providers from "./providers/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
