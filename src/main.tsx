import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MotionConfig } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="min-h-svh">
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </main>
  </React.StrictMode>
);
