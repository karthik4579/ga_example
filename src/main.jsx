import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ga4react from "./analytics";

(async () => {
  try {
    await ga4react.initialize();
    console.log("GA4 initialized");
  } catch (error) {
    console.error("GA4 failed to initialize", error);
  }

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})();