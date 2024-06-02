import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MotionConfig } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="min-h-svh">
      <h1 className="sr-only">Card details form</h1>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </main>
  </React.StrictMode>
);
